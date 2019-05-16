package com.medintu.samplingkit.rest.resources;

import java.util.List;
import java.util.Set;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.medintu.samplingkit.dao.EndUserTestsDao;
import com.medintu.samplingkit.entity.EndUser;
import com.medintu.samplingkit.entity.EndUserMapper;
import com.medintu.samplingkit.entity.EndUserTests;
import com.medintu.samplingkit.entity.TestCode;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.service.EndUserService;
import com.medintu.samplingkit.service.impl.MailSenderImpl;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Path("endUsers")
public class EndUserResource {

	@Autowired
	private EndUserService endUserService;

	@Autowired
	private MailSenderImpl mailSenderImpl;

	@Autowired
	private EndUserTestsDao endUserTestsDao;

	@Path("/validateAgeAndPostCode")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response validateEndUserAgeAndPostCode(EndUserMapper endUserMapper) {

		Response response = null;

		if (null != endUserMapper.getAge() && !StringUtils.isEmpty(endUserMapper.getPostCode())) {
			if (endUserMapper.getAge() >= 16
					&& endUserService.validateAgeAndPostCode(endUserMapper.getAge(), endUserMapper.getPostCode())) {

				response = new Response("Success", HttpStatus.OK);

			} else {
				response = new Response(
						"Sorry - we're not able to offer postal tests to under 16s in your area, but other services are available.",
						HttpStatus.CONFLICT);
			}
		}

		return response;
	}

	/*
	 * @Path("/validateGenderAndEthnicGroup")
	 * 
	 * @POST
	 * 
	 * @Consumes(MediaType.APPLICATION_JSON)
	 * 
	 * @Produces(MediaType.APPLICATION_JSON) public Response
	 * validateEndUserGenderAndEthnicGroup(EndUserMapper endUserMapper) {
	 * 
	 * Response response = null;
	 * 
	 * if (!StringUtils.isEmpty(endUserMapper.getPostCode()) &&
	 * !StringUtils.isEmpty(endUserMapper.getGender())) { Long sponserId =
	 * endUserService.validateGenderAndEthnicGroup(endUserMapper);
	 * 
	 * endUserMapper.setSponsorId(sponserId); if (null != sponserId) {
	 * 
	 * response = new Response("Success", HttpStatus.OK, sponserId.toString()); }
	 * else { response = new Response(
	 * "Sorry - we're not able to offer postal tests to under 16s in your area, but other services are available."
	 * , HttpStatus.CONFLICT); } }else { response = new Response(
	 * "Sorry - we're not able to offer postal tests for this ethnic group our area, but other services are available."
	 * , HttpStatus.CONFLICT); }
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
			Long sponserId = endUserService.validateGenderAndEthnicGroup(endUserMapper);
			if (sponserId != null) {
				Set<TestCode> testCodes = endUserService.getDefaultTestCodes(endUserMapper);
				if (!CollectionUtils.isEmpty(testCodes)) {
					endUserMapper.setTestCodes(testCodes);
				}
				endUserMapper.setSponsorId(sponserId);

				response = new Response(endUserMapper, HttpStatus.OK, "Success");
			} else {
				response = new Response(
						"Sorry - we're not able to offer postal tests to under 16s in your area, but other services are available.",
						HttpStatus.NOT_FOUND);
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
			mailSenderImpl.sendMail(endUserMapper.getFirstName(), endUserMapper.getNotificationEmail());
		}
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
				
			
			}
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
			response = new Response(endUsers, HttpStatus.OK, "End Users Found");
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
}
