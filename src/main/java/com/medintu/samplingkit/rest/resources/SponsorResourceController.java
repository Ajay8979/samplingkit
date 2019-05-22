package com.medintu.samplingkit.rest.resources;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.CrossOrigin;

import com.medintu.samplingkit.dao.EndUserDao;
import com.medintu.samplingkit.dao.RuleDao;
import com.medintu.samplingkit.dao.SponsorAddressDao;
import com.medintu.samplingkit.dao.SponsorDao;
import com.medintu.samplingkit.dao.SponsorPostlcodeDao;
import com.medintu.samplingkit.dao.SponsorSpentDao;
import com.medintu.samplingkit.dao.TestResultDao;
import com.medintu.samplingkit.entity.DashboardSponsor;
import com.medintu.samplingkit.entity.EndUser;
import com.medintu.samplingkit.entity.PostalCode;
import com.medintu.samplingkit.entity.Rule;
import com.medintu.samplingkit.entity.RuleDetailsMapper;
import com.medintu.samplingkit.entity.RuleMapper;
import com.medintu.samplingkit.entity.Sponsor;
import com.medintu.samplingkit.entity.SponsorAddress;
import com.medintu.samplingkit.entity.SponsorMapper;
import com.medintu.samplingkit.entity.SponsorPostlcode;
import com.medintu.samplingkit.entity.SponsorSpentMapper;
import com.medintu.samplingkit.entity.SponsorWithPostalMapper;
import com.medintu.samplingkit.entity.TestCode;
import com.medintu.samplingkit.entity.TestResult;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.service.SponsorService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Path("/sponsor")
public class SponsorResourceController {
	@Autowired
	private SponsorService sponsorService;
	@Autowired
	private RuleDao ruleDao;

	@Autowired
	SponsorPostlcodeDao sponsorPostlcodeDao;

	@Autowired
	SponsorAddressDao sponsorAddressDao;

	@Autowired
	SponsorDao sponsorDao;

	@Autowired
	EndUserDao endUserDao;

	@Autowired
	TestResultDao testResultDao;

	@Autowired
	private SponsorSpentDao sponsorSpentDao;

	@Path("/createSponsor")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createSponsor(SponsorMapper sponsorMapper) {
		Response response = null;
		Sponsor sponsor = null;
		SponsorAddress sponsorAddress = null;
		try {
			if (null != sponsorMapper) {

				sponsor = new Sponsor();
				sponsor.setName(sponsorMapper.getName());
				sponsor.setBudget(sponsorMapper.getBudget());

				Sponsor createSponsor = sponsorService.createSponsor(sponsor);

				List<SponsorAddress> addressList = sponsorMapper.getAddressList();

				if (!CollectionUtils.isEmpty(addressList)) {
					for (SponsorAddress sponsorAddress2 : addressList) {
						sponsorAddress = new SponsorAddress();
						sponsorAddress.setEmail(sponsorAddress2.getEmail());
						sponsorAddress.setPhone(sponsorAddress2.getPhone());
						sponsorAddress.setPostCode(sponsorAddress2.getPostCode());
						sponsorAddress.setStreetNumber(sponsorAddress2.getStreetNumber());
						sponsorAddress.setStreetName1(sponsorAddress2.getStreetName1());
						sponsorAddress.setDistrict(sponsorAddress2.getDistrict());
						sponsorAddress.setCity(sponsorAddress2.getCity());
						sponsorAddress.setSponsor_id(createSponsor.getId());
						sponsorAddressDao.save(sponsorAddress);

					}
				}
				List<PostalCode> postalCodes = sponsorMapper.getPostalCodes();

				if (!CollectionUtils.isEmpty(postalCodes)) {
					for (PostalCode postalCode : postalCodes) {
						SponsorPostlcode postalCode2 = new SponsorPostlcode();
						postalCode2.setPostal_id(postalCode.getId());
						postalCode2.setSponsor_id(createSponsor.getId());
						sponsorPostlcodeDao.save(postalCode2);
					}

				}

				if (null != createSponsor) {
					response = new Response("Success", HttpStatus.OK, "Sponsor Added Successfully", createSponsor);
				} else {
					response = new Response("Fail", "Unable to add Sponsor is not saved", HttpStatus.METHOD_FAILURE);
				}
			}
		} catch (Exception e) {
			response = new Response("Fail", "Sponsor Already Exist", HttpStatus.ALREADY_REPORTED);
		}

		return response;
	}

	@Path("/showAllSponsors")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllSponsors() {

		Response response = null;

		List<Sponsor> sponsors = sponsorService.getAllSponsors();
		if (!CollectionUtils.isEmpty(sponsors)) {
			response = new Response(sponsors, 0, sponsors.size(), HttpStatus.OK, "Sponsors Found");
		} else {
			response = new Response("Sponsors not found", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;
	}

	@Path("/addresses/{sponsorId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getSponsorAddressesBySponsorId(@PathParam("sponsorId") Integer sponsorId) {

		Response response = null;
		List<SponsorAddress> sponserAddresses = sponsorService.getSponsorAddressesBySponsorId(sponsorId);
		if (!CollectionUtils.isEmpty(sponserAddresses)) {
			response = new Response(sponserAddresses, 0, sponserAddresses.size(), HttpStatus.OK,
					"Sponsor Addresses Found");
		} else {
			response = new Response("Sponsor Addresses not Found", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;

	}

	@Path("/{sponsorId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getSponsorById(@PathParam("sponsorId") Integer sponsorId) {

		Response response = null;
		Sponsor sponsor = sponsorService.getSponsorBySponsorId(sponsorId);
		if (null != sponsor) {
			response = new Response(sponsor, HttpStatus.OK, "Sponsor Found");
		} else {
			response = new Response("Sponsor not Found", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;
	}

	/*
	 * @Path("/testCodes/{sponsorId}")
	 * 
	 * @GET
	 * 
	 * @Produces(MediaType.APPLICATION_JSON) public Response
	 * getTestCodesBySponsorId(@PathParam("sponsorId") Integer sponsorId) {
	 * 
	 * Response response = null; List<TestCode> testCodes =
	 * sponsorService.getTestCodesBySponsorId(sponsorId); if
	 * (!CollectionUtils.isEmpty(testCodes)) { response = new Response(testCodes,
	 * HttpStatus.OK, "TestCodes Found"); } else { response = new
	 * Response("TestCode not Found", HttpStatus.INTERNAL_SERVER_ERROR); } return
	 * response;
	 * 
	 * }
	 */

	@Path("/rules/{sponsorId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getSponsorRulesBySponsorId(@PathParam("sponsorId") Integer sponsorId) {

		Response response = null;
		List<Rule> rules = sponsorService.getSponsorRulesBySponsorId(sponsorId);
		if (!CollectionUtils.isEmpty(rules)) {
			response = new Response(rules, 0, rules.size(), HttpStatus.OK, "Rules Found");
		} else {
			response = new Response("Rules not Found", HttpStatus.INTERNAL_SERVER_ERROR);

		}
		return response;

	}

	@Path("/rules/update")
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateSponsorRulesById(RuleMapper ruleMapper) {

		Response response = null;
		Rule rule = new Rule();
		BeanUtils.copyProperties(ruleMapper, rule);
		Rule updatedRule = sponsorService.updateSponsorRulesById(rule);
		if (null != updatedRule) {
			response = new Response(updatedRule, HttpStatus.OK, "Rule Updated");
		} else {
			response = new Response("Rules not Found", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;

	}

	@Path("/addresses/update")
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateSponsorAddressesById(SponsorAddress sponsorAddress) {

		Response response = null;
		SponsorAddress updatedAddress = sponsorService.updateSponsorAddressesById(sponsorAddress);
		if (null != updatedAddress) {
			response = new Response(updatedAddress, HttpStatus.OK, "Sponsor Address Updated");
		} else {
			response = new Response("Rules not Found", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;

	}

	@Path("/postCodes/update/{sponsorId}")
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	public Response updatePostCodesBySponsorId(@PathParam("sponsorId") Long sponsorId, PostalCode postalCode) {

		Response response = null;
		if (sponsorService.updatePostCodesBySponsorId(postalCode, sponsorId)) {
			response = new Response("Sponsor Post Code Updated Successfully+", HttpStatus.OK);
		} else {
			response = new Response("Sponsor Post Code not updated", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;

	}

	@Path("/postCodes/{sponsorId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getPostCodesBySponsorId(@PathParam("sponsorId") Long sponsorId) {

		Response response = null;
		List<PostalCode> postalCodes = sponsorService.getPostCodesBySponsorId(sponsorId);
		if (!CollectionUtils.isEmpty(postalCodes)) {
			response = new Response(postalCodes, 0, postalCodes.size(), HttpStatus.OK, "Postal Codes Found");
		} else {
			response = new Response("Postal Codes not Found", HttpStatus.INTERNAL_SERVER_ERROR);

		}
		return response;

	}

	@Path("/sponsorWithPostalCode/{sponsorId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getSponsorWithPostalCode(@PathParam("sponsorId") Long sponsorId) {

		Response response = null;
		Sponsor spor = sponsorDao.find(sponsorId);
		SponsorWithPostalMapper sponsorWithPostalMapper = new SponsorWithPostalMapper();
		BeanUtils.copyProperties(spor, sponsorWithPostalMapper);
		List<PostalCode> postalCodes = sponsorService.getPostCodesBySponsorId(sponsorId);
		sponsorWithPostalMapper.setPostalCodes(postalCodes);

		if (null != spor) {
			response = new Response(sponsorWithPostalMapper, HttpStatus.OK, "Postal Codes Found");
		} else {
			response = new Response("Postal Codes not Found", HttpStatus.INTERNAL_SERVER_ERROR);

		}
		return response;

	}

	@Path("/sponsorWithPostalCode/{sponsorId}")
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateSponsorWithPostalCode(@PathParam("sponsorId") Long sponsorId,
			SponsorWithPostalMapper sponsorWithPostalMapper) {
		Sponsor sponsor = new Sponsor();
		Response response = null;
		BeanUtils.copyProperties(sponsorWithPostalMapper, sponsor);
		sponsor.setId(sponsorId);
		Sponsor spor = sponsorDao.save(sponsor);

		/*
		 * BeanUtils.copyProperties(spor, sponsorWithPostalMapper); List<PostalCode>
		 * postalCodes = sponsorService.getPostCodesBySponsorId(sponsorId);
		 * sponsorWithPostalMapper.setPostalCodes(postalCodes);
		 */
		sponsorPostlcodeDao.deletePostalCodesBySponsorId(sponsorId);
		for (PostalCode post : sponsorWithPostalMapper.getPostalCodes()) {
			SponsorPostlcode sponsorPostlcode = new SponsorPostlcode();
			sponsorPostlcode.setPostal_id(post.getId());
			sponsorPostlcode.setSponsor_id(sponsorId);
			sponsorPostlcodeDao.save(sponsorPostlcode);
		}
		if (null != spor) {
			response = new Response(sponsorWithPostalMapper, HttpStatus.OK, "Postal Codes Found");
		} else {
			response = new Response("Postal Codes not Found", HttpStatus.INTERNAL_SERVER_ERROR);

		}
		return response;

	}

	@Path("/testCodes/{sponsorId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getTestCodesBySponsorId(@PathParam("sponsorId") Long sponsorId) {

		Response response = null;
		List<TestCode> testCodes = sponsorService.getTestCodesBySponsorId(sponsorId);
		if (!CollectionUtils.isEmpty(testCodes)) {
			response = new Response(testCodes, 0, testCodes.size(), HttpStatus.OK, "Postal Codes Found");
		} else {
			response = new Response("Postal Codes not Found", HttpStatus.INTERNAL_SERVER_ERROR);

		}
		return response;

	}

	@Path("/sponsorDetails/{sponsorId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getSponsorDetailsById(@PathParam("sponsorId") Integer sponsorId) {
		Response response = null;
		Map<String, Object> objMap = new HashMap<String, Object>();

		Sponsor sponsor = sponsorService.getSponsorBySponsorId(sponsorId);
		if (null != sponsor) {
			objMap.put("sponsor", sponsor);
		}

		List<SponsorAddress> sponserAddresses = sponsorService.getSponsorAddressesBySponsorId(sponsorId);
		if (!CollectionUtils.isEmpty(sponserAddresses)) {
			objMap.put("addresses", sponserAddresses);
		}

		List<PostalCode> postalCodes = sponsorService.getPostCodesBySponsorId(Long.valueOf(sponsorId));
		if (!CollectionUtils.isEmpty(postalCodes)) {
			objMap.put("postalCodes", postalCodes);
		}

		List<RuleDetailsMapper> ruleDetailsMappers = sponsorService.getRuleDeatilsBySponsorId(sponsorId);
		if (!CollectionUtils.isEmpty(ruleDetailsMappers)) {
			objMap.put("rules", ruleDetailsMappers);
		}

		if (!CollectionUtils.isEmpty(objMap)) {
			response = new Response(objMap, HttpStatus.OK, "Sponsor Details Found");
		} else {
			response = new Response("Failed", HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return response;
	}

	@Path("/sponsorOrder/{sponsorId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response SponsorOrderDetailsById(@PathParam("sponsorId") Long sponsorId) {
		Response response = null;
		Integer placed = null;
		Integer dispatched = null;
		Integer reactive = null;
		Integer nonReactive = null;
		Double budgetSpent = null;
		Double budgetRemaining = null;

		List<EndUser> orderOPlaced = endUserDao.getorderPlacedBySponserId(sponsorId.toString());

		if (!CollectionUtils.isEmpty(orderOPlaced)) {
			placed = orderOPlaced.size();
		} else {
			response = new Response("Failed", HttpStatus.NO_CONTENT);
		}

		List<EndUser> orderODispatched = endUserDao.getorderDispatchedBySponserId(sponsorId.toString());

		if (!CollectionUtils.isEmpty(orderOPlaced)) {
			dispatched = orderODispatched.size();
		} else {
			response = new Response("Failed", HttpStatus.NO_CONTENT);
		}

		List<TestResult> reactiveResultsBySponsorId = testResultDao.getReactiveResultsBySponsorId(sponsorId.toString());

		if (!CollectionUtils.isEmpty(orderOPlaced)) {
			reactive = reactiveResultsBySponsorId.size();
		} else {
			response = new Response("Failed", HttpStatus.NO_CONTENT);
		}

		List<TestResult> nonreactiveResultsBySponsorId = testResultDao
				.getReactiveResultsBySponsorId(sponsorId.toString());

		if (!CollectionUtils.isEmpty(orderOPlaced)) {
			nonReactive = nonreactiveResultsBySponsorId.size();
		} else {
			response = new Response("Failed", HttpStatus.NO_CONTENT);
		}

		List<SponsorSpentMapper> sponsorBudgetDetails = sponsorSpentDao.getSponsorBudgetDetails(sponsorId);

		if (!CollectionUtils.isEmpty(orderOPlaced)) {
			budgetSpent = sponsorBudgetDetails.get(0).getSponsorSpent();
			budgetRemaining = sponsorBudgetDetails.get(0).getRemainingAmount();
		} else {
			response = new Response("Failed", HttpStatus.NO_CONTENT);
		}

		DashboardSponsor dashboardSponsor = new DashboardSponsor();
		dashboardSponsor.setOrderDispatched(dispatched);
		dashboardSponsor.setOrderplaced(placed);
		dashboardSponsor.setResultNonReactive(nonReactive);
		dashboardSponsor.setResultReactive(reactive);
		dashboardSponsor.setSponsorBudgetSpent(budgetSpent);
		dashboardSponsor.setSponsorBudgetRemaining(budgetRemaining);
		response = new Response(dashboardSponsor, HttpStatus.OK, "Sponsor Details Found");

		return response;

	}

}
