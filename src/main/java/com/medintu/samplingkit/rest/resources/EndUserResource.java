package com.medintu.samplingkit.rest.resources;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.medintu.samplingkit.dao.EndUserTestsDao;
import com.medintu.samplingkit.dao.SponsorSpentDao;
import com.medintu.samplingkit.entity.EndUser;
import com.medintu.samplingkit.entity.EndUserConfiguration;
import com.medintu.samplingkit.entity.EndUserMapper;
import com.medintu.samplingkit.entity.EndUserTests;
import com.medintu.samplingkit.entity.Hl7Message;
import com.medintu.samplingkit.entity.ORMMessage;
import com.medintu.samplingkit.entity.ORUMessage;
import com.medintu.samplingkit.entity.RuleMapper;
import com.medintu.samplingkit.entity.SponsorSpent;
import com.medintu.samplingkit.entity.TestCode;
import com.medintu.samplingkit.entity.TestResult;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.service.EndUserService;
import com.medintu.samplingkit.service.TestResultService;
import com.medintu.samplingkit.service.impl.MailSenderImpl;

import ca.uhn.hl7v2.DefaultHapiContext;
import ca.uhn.hl7v2.HL7Exception;
import ca.uhn.hl7v2.HapiContext;
import ca.uhn.hl7v2.model.Message;
import ca.uhn.hl7v2.model.v25.datatype.XAD;
import ca.uhn.hl7v2.model.v25.datatype.XPN;
import ca.uhn.hl7v2.model.v25.group.ORU_R01_ORDER_OBSERVATION;
import ca.uhn.hl7v2.model.v25.message.ORM_O01;
import ca.uhn.hl7v2.model.v25.message.ORU_R01;
import ca.uhn.hl7v2.model.v25.segment.MSH;
import ca.uhn.hl7v2.model.v25.segment.OBR;
import ca.uhn.hl7v2.model.v25.segment.OBX;
import ca.uhn.hl7v2.model.v25.segment.ORC;
import ca.uhn.hl7v2.model.v25.segment.PID;
import ca.uhn.hl7v2.parser.Parser;
import ca.uhn.hl7v2.util.Hl7InputStreamMessageIterator;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Path("endUsers")
public class EndUserResource {

	@Autowired
	private EndUserService endUserService;

	@Autowired
	private MailSenderImpl mailSenderImpl;

	@Autowired
	private EndUserTestsDao endUserTestsDao;

	@Autowired
	private TestResultService testResultService;

	@Autowired
	private SponsorSpentDao sponsorSpentDao;

	@Autowired
	private EndUserConfiguration userConfiguration;

	/*
	 * @Path("/validateAgeAndPostCode")
	 * 
	 * @POST
	 * 
	 * @Consumes(MediaType.APPLICATION_JSON)
	 * 
	 * @Produces(MediaType.APPLICATION_JSON) public Response
	 * validateEndUserAgeAndPostCode(EndUserMapper endUserMapper) {
	 * 
	 * Response response = null;
	 * 
	 * if (null != endUserMapper.getAge() &&
	 * !StringUtils.isEmpty(endUserMapper.getPostCode())) { if
	 * (endUserMapper.getAge() >= 16 &&
	 * endUserService.validateAgeAndPostCode(endUserMapper.getAge(),
	 * endUserMapper.getPostCode())) {
	 * 
	 * response = new Response("Success", HttpStatus.OK);
	 * 
	 * } else { response = new Response(
	 * "Sorry - we're not able to offer postal tests to under 16s in your area, but other services are available."
	 * , HttpStatus.CONFLICT); } }
	 * 
	 * return response; }
	 */
	@Path("/validateGenderAndEthnicGroup")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response validateGendeAndEthnicGroupAndGetTestCodes(EndUserMapper endUserMapper) {

		Response response = null;

		if (!StringUtils.isEmpty(endUserMapper.getPostCode()) && !StringUtils.isEmpty(endUserMapper.getGender())) {

			TestCodeSponsorIdMapper ruleMapper = endUserService.getDefaultTestCodes(endUserMapper);

			if (null != ruleMapper)
				response = new Response(ruleMapper, HttpStatus.OK, "Success");
			else {
				response = new Response(
						"Sorry - we're not able to offer postal tests in your area, but other services are available.",
						HttpStatus.CONFLICT);
			}
		}

		return response;
	}

	@Path("/create/{sponserId}")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createEndUser(EndUserMapper endUserMapper, @PathParam("sponserId") Long sponserId) {

		Response response = null;

		EndUser endUser = new EndUser();
		BeanUtils.copyProperties(endUserMapper, endUser);

		String generateOrderCode = "PO" + Math.round(Math.random() * 100000000);

		endUser.setOrderCode(generateOrderCode);
		endUser.setSponsorId(sponserId);
		endUser.setStatus("In Progress");

		if (!StringUtils.isEmpty(endUserMapper.getNotificationEmail())) {
			try {
				mailSenderImpl.sendMail(endUserMapper.getFirstName(), endUserMapper.getNotificationEmail());
			} catch (Exception e) {

			}
		}
		endUser.setCreatedDate(new Date());
		EndUser createdEndUser = endUserService.addEndUser(endUser);

		if (null != createdEndUser) {

			Set<TestCode> testCodes = endUserMapper.getTestCodes();
			if (!CollectionUtils.isEmpty(testCodes)) {
				for (TestCode testCode : testCodes) {
					EndUserTests endUserTests = new EndUserTests();
					endUserTests.setEnduser_id(createdEndUser.getId());
					endUserTests.setTest_id(testCode.getId());
					endUserTestsDao.save(endUserTests);
				}
				SponsorSpent sponsorSpent = new SponsorSpent();
				sponsorSpent.setBudgetSpent(5D);
				sponsorSpent.setOrderId(generateOrderCode);
				sponsorSpent.setTxDate(new Date());
				sponsorSpent.setSponsorId(sponserId);
				sponsorSpentDao.save(sponsorSpent);
				/*
				 * sponsorDao.updatesponsorBudget(sponserId, sponsorSpent.getBudgetSpent());
				 */ }

			/* writehl7File(endUser); */
			response = new Response("Success", HttpStatus.OK, generateOrderCode);
		} else {
			response = new Response("Failed to add End User.", HttpStatus.CONFLICT, generateOrderCode);
		}

		return response;
	}

	@Path("/{sponserId}")
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getEndUsersBySponserId(@PathParam("sponserId") Long sponserId) {
		Response response = null;

		List<EndUser> endUsers = null;
		if (null != sponserId) {
			endUsers = endUserService.getEndUsersBySponserId(sponserId);
		}
		if (!CollectionUtils.isEmpty(endUsers)) {
			response = new Response(endUsers, HttpStatus.OK, "End Users Found");
		} else {
			response = new Response("End Users not Found", HttpStatus.CONFLICT);
		}
		return response;
	}

	@Path("/getAll")
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllEndUsers() {
		Response response = null;

		List<EndUser> endUsers = endUserService.getEndUsers();
		if (!CollectionUtils.isEmpty(endUsers)) {
			response = new Response(endUsers, 0, endUsers.size(), HttpStatus.OK, "End Users Found");
		} else {
			response = new Response("End Users not Found", HttpStatus.CONFLICT);
		}
		return response;
	}

	@Path("/endUser/{orderCode}")
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getEndUsersByOrderCode(@PathParam("orderCode") String orderCode) {
		Response response = null;

		List<EndUser> endUsers = null;
		if (null != orderCode) {
			endUsers = endUserService.getEndUsersByOrderCode(orderCode);
		}
		if (!CollectionUtils.isEmpty(endUsers)) {
			response = new Response(endUsers, HttpStatus.OK, "End Users Found");
		} else {
			response = new Response("End Users not Found", HttpStatus.CONFLICT);
		}
		return response;
	}

	@Path("/updateEndUser")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateEndUserById(EndUser endUser) {
		Response response;
		EndUser enduser = endUserService.updateEndUserById(endUser);
		try {
			if (null != enduser) {
				response = new Response(enduser, HttpStatus.OK, "EndUser  updated successfully");
			} else {
				response = new Response("Failed to update EndUser", HttpStatus.CONFLICT);
			}
		} catch (Exception e) {
			response = new Response("EndUser already exists", HttpStatus.CONFLICT);
		}
		return response;

	}

	@Path("/getEndUsersInGivenDates")
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getEndUsersInGivenDates(@QueryParam("startDate") String stratDate,
			@QueryParam("endDate") String endDate) {

		Response response = null;

		if (!StringUtils.isEmpty(stratDate) && !StringUtils.isEmpty(endDate)) {
			List<EndUser> endUsers = endUserService.getEndUsersInGivenDates(stratDate, endDate);
			if (!CollectionUtils.isEmpty(endUsers)) {
				response = new Response(endUsers, HttpStatus.OK, "EndUsers  found");
			} else {
				response = new Response("EndUsers not found", HttpStatus.CONFLICT);
			}
		} else {
			response = new Response("Strat date/ End date missing", HttpStatus.CONFLICT);
		}

		return response;
	}

	@Path("/searchEndUsers")
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response searchEndUser(@QueryParam("searchString") String searchString) {

		Response response = null;
		if (!StringUtils.isEmpty(searchString)) {
			List<EndUser> endUsers = endUserService.searchEndUser(searchString);
			if (!CollectionUtils.isEmpty(endUsers)) {
				response = new Response(endUsers, HttpStatus.OK, "EndUsers  found");
			} else {
				response = new Response("EndUsers not found", HttpStatus.CONFLICT);
			}
		} else {
			response = new Response("searchString missing", HttpStatus.CONFLICT);
		}
		return response;
	}

	@Path("/writeFile")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Hl7Message writehl7File(EndUser endUser) {

		HapiContext context = new DefaultHapiContext();
		ORM_O01 ormMessage = null;
		ORU_R01 oruMessage = null;
		InputStream inputStream = null;
		Hl7Message hl7Message = new Hl7Message();
		try {
			ormMessage = (ORM_O01) endUserService.createMessage("O01", endUser);

			oruMessage = (ORU_R01) endUserService.createMessage("R01", endUser);
			Parser pipeParser = context.getPipeParser();
			pipeParser.encode(ormMessage);
			System.out.println(ormMessage);

			File fileORM = null;
			File fileORU = null;

			/*
			 * System.out.println("Path" + userConfiguration.writeORM());
			 * System.out.println("Path" + userConfiguration.writeORU());
			 */

			fileORM = endUserService.writeMessageToFileORM(pipeParser, ormMessage,
					userConfiguration.writeORM() + endUser.getOrderCode() + "ORM.hl7");
			fileORU = endUserService.writeMessageToFileORU(pipeParser, oruMessage,
					userConfiguration.writeORU() + endUser.getOrderCode() + "ORU.hl7");

			File fileNew = new File(userConfiguration.writeORM() + endUser.getOrderCode() + "ORM.hl7");

			InputStream is0 = new FileInputStream(fileNew);
			is0 = new BufferedInputStream(is0);
			Hl7InputStreamMessageIterator iter0 = new Hl7InputStreamMessageIterator(is0);
			Message ormReadMessage = null;
			while (iter0.hasNext()) {
				ormReadMessage = iter0.next();
			}

			File fileNew1 = new File(userConfiguration.writeORU() + endUser.getOrderCode() + "ORU.hl7");

			InputStream is = new FileInputStream(fileNew1);
			is = new BufferedInputStream(is);
			Hl7InputStreamMessageIterator iter = new Hl7InputStreamMessageIterator(is);
			Message oruReadMessage = null;
			while (iter.hasNext()) {
				oruReadMessage = iter.next();
			}

			MSH mshSegment = ((ORU_R01) oruReadMessage).getMSH();
			String applicationName = mshSegment.getSendingApplication().getNamespaceID().toString();

			PID pid = ((ORU_R01) oruReadMessage).getPATIENT_RESULT().getPATIENT().getPID();
			String ethinicGroups = pid.getEthnicGroup(0).getText().toString();
			String gender = pid.getAdministrativeSex().toString();
			String address = pid.getPatientAddress(0).getAddressType().toString();
			String postalCode = pid.getPatientAddress(0).getZipOrPostalCode().toString();

			String phoneNumber = pid.getPhoneNumberHome(0).getTelephoneNumber().toString();
			String mail = pid.getPhoneNumberHome(0).getEmailAddress().toString();
			XPN patientName = pid.getPatientName(0);
			String lastName = patientName.getFamilyName().getSurname().toString();
			String firstName = patientName.getGivenName().toString();

			ORU_R01 oru = (ORU_R01) oruReadMessage.getMessage();
			OBX obx = oru.getPATIENT_RESULT().getORDER_OBSERVATION().getOBSERVATION(0).getOBX();
			String testResult = obx.getValueType().toString();
			String testCode = obx.getObservationIdentifier().getIdentifier().toString();
			String testName = obx.getObservationIdentifier().getText().toString();
			String abnormalFlags = obx.getAbnormalFlags(0).toString();
			String abnormalTest = obx.getNatureOfAbnormalTest(0).toString();
			String abnormalTestResult = obx.getObservationResultStatus().toString();

			ORU_R01_ORDER_OBSERVATION orderObservation = ((ORU_R01) oruReadMessage).getPATIENT_RESULT()
					.getORDER_OBSERVATION();
			OBR obr = orderObservation.getOBR();
			String testCodeObr = obr.getUniversalServiceIdentifier().getIdentifier().toString();
			String testNameObr = obr.getUniversalServiceIdentifier().getText().toString();

			ORC orc = ((ORU_R01) oruReadMessage).getPATIENT_RESULT().getORDER_OBSERVATION().getORC();
			String orderId = orc.getPlacerOrderNumber().getUniversalID().toString();
			String status = "Completed";
			String orderStatus = orc.getOrderStatus().toString();
			String SponserId = orc.getOrderingProvider(0).getIDNumber().toString();

			TestResult testResultData = new TestResult();
			testResultData.setEthinicGroups(ethinicGroups);
			testResultData.setGender(gender);
			testResultData.setMail(mail);
			testResultData.setOrderId(orderId);
			testResultData.setPatientName(firstName);
			testResultData.setPhoneNumber(phoneNumber);
			testResultData.setSTATUS(status);
			testResultData.setTestCode(testCode);
			testResultData.setTestName(testResult);
			testResultData.setTestResult(testResult);

			testResultService.createTestResult(testResultData);
			testResultService.updateEnduser(testResultData);

			ORUMessage oruMess = new ORUMessage();
			oruMess.setApplicationName(applicationName);
			oruMess.setEthinicGroups(ethinicGroups);
			oruMess.setFirstName(firstName);
			oruMess.setLastName(lastName);
			oruMess.setGender(gender);
			oruMess.setMail(mail);
			oruMess.setPhoneNumber(phoneNumber);
			oruMess.setAddress(address);
			oruMess.setPostalCode(postalCode);
			oruMess.setAbnormalFlags(abnormalFlags);
			oruMess.setAbnormalTest(abnormalTest);
			oruMess.setAbnormalTestResult(abnormalTestResult);
			oruMess.setTestResult(testResult);
			oruMess.setTestCode(testCodeObr);
			oruMess.setTestName(testNameObr);
			oruMess.setOrderNumber(orderId);
			oruMess.setOrderStatus(orderStatus);
			oruMess.setSponserId(SponserId);

			MSH mshSegment0 = ((ORM_O01) ormReadMessage).getMSH();
			String applicationName0 = mshSegment0.getSendingApplication().getNamespaceID().toString();

			PID pid0 = ((ORM_O01) ormReadMessage).getPATIENT().getPID();
			String ethiniGruops0 = pid0.getEthnicGroup(0).getText().toString();
			String gender0 = pid0.getAdministrativeSex().toString();
			String phoneNumber0 = pid0.getPhoneNumberHome(0).getTelephoneNumber().toString();
			String mail0 = pid0.getPhoneNumberHome(0).getEmailAddress().toString();

			XPN patientName0 = pid.getPatientName(0);
			String lastName0 = patientName0.getFamilyName().getSurname().toString();
			String firstName0 = patientName0.getGivenName().toString();

			XAD patientAddress0 = pid.getPatientAddress(0);
			String address0 = patientAddress0.getAddressType().toString();
			String postalCode0 = patientAddress0.getZipOrPostalCode().toString();

			ORC orc0 = ((ORM_O01) ormReadMessage).getORDER().getORC();
			String transactionDate0 = orc0.getDateTimeOfTransaction().getTime().toString();
			String orderStatus0 = orc0.getOrderStatus().toString();

			String OrderId0 = orc0.getPlacerOrderNumber().getUniversalID().toString();
			String sponsorId0 = orc0.getOrderingProvider(0).getIDNumber().toString();

			OBR obr0 = ((ORM_O01) ormReadMessage).getORDER().getORDER_DETAIL().getOBR();
			String TestCode0 = obr0.getUniversalServiceIdentifier().getIdentifier().toString();
			String testName0 = obr0.getUniversalServiceIdentifier().getText().toString();

			ORMMessage ormMess = new ORMMessage();
			ormMess.setAddress(address0);
			ormMess.setApplicationName(applicationName0);
			ormMess.setEthinicGroups(ethiniGruops0);
			ormMess.setFirstName(firstName0);
			ormMess.setLastName(lastName0);
			ormMess.setGender(gender0);
			ormMess.setMail(mail0);
			ormMess.setPhoneNumber(phoneNumber0);
			ormMess.setOrderNumber(OrderId0);
			ormMess.setOrderStatus(orderStatus0);
			ormMess.setPostalCode(postalCode0);
			ormMess.setSponserId(sponsorId0);
			ormMess.setTestCode(TestCode0);
			ormMess.setTestName(testName0);
			ormMess.setOrderDate(transactionDate0);

			hl7Message.setOruMessage(oruMess);
			hl7Message.setOrmMessage(ormMess);

			// mail.sendMail(endUserMapper.getFirstName(), endUserMapper.getEmail(), file);

			System.out.println(fileNew.length());
		} catch (HL7Exception | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return hl7Message;

	}

}
