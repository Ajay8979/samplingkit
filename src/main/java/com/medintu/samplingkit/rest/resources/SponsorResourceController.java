package com.medintu.samplingkit.rest.resources;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.medintu.samplingkit.entity.Rule;
import com.medintu.samplingkit.entity.SpecialEventMapper;
import com.medintu.samplingkit.entity.Sponsor;
import com.medintu.samplingkit.entity.SponsorAddress;
import com.medintu.samplingkit.entity.SponsorMapper;
import com.medintu.samplingkit.entity.TestCode;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.service.SponsorService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Path("/sponsor")
public class SponsorResourceController {
	@Autowired
	private SponsorService sponsorService;

	@Path("/createSponsor")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createSponsor(SponsorMapper sponsorMapper) {
		Response response = null;
		Sponsor sponsor = null;
		SponsorAddress sponsorAddress = null;
		List<TestCode> testList = null;
		List<SponsorAddress> sponsorAddressList = null;
		List<Rule> ruleLists = null;
		try {
			if (null != sponsorMapper) {
				List<SponsorAddress> addressList = sponsorMapper.getAddressList();
				sponsorAddressList = new ArrayList<>();

				if (!CollectionUtils.isEmpty(addressList)) {
					for (SponsorAddress sponsorAddress2 : addressList) {
						sponsorAddress = new SponsorAddress();
						sponsorAddress.setStreetNumber(sponsorAddress2.getStreetNumber());
						sponsorAddress.setStreetName1(sponsorAddress2.getStreetName1());
						sponsorAddress.setStreetName2(sponsorAddress2.getStreetName2());
						sponsorAddress.setSuit(sponsorAddress2.getSuit());
						sponsorAddress.setState(sponsorAddress2.getState());
						sponsorAddress.setRegion(sponsorAddress2.getRegion());
						sponsorAddress.setZipcode(sponsorAddress2.getZipcode());
						sponsorAddress.setDistrict(sponsorAddress2.getDistrict());
						sponsorAddress.setCity(sponsorAddress2.getCity());
						sponsorAddress.setCountry(sponsorAddress2.getCountry());
						sponsorAddressList.add(sponsorAddress);

					}
				}
				ruleLists = new ArrayList<>();
				List<Rule> ruleList = sponsorMapper.getRuleList();
				if (!CollectionUtils.isEmpty(ruleList)) {
					for (Rule rule : ruleList) {
						ruleLists.add(rule);
					}
				}
				List<SpecialEventMapper> specialMappers = sponsorMapper.getMappers();
				if (!CollectionUtils.isEmpty(specialMappers)) {
					for (SpecialEventMapper specialMapper : specialMappers) {
						Rule rule = new Rule();
						rule.setRuleName("SpecialEvent");
						rule.setRuleValue(specialMapper.getEventValue());
						rule.setStartDate(specialMapper.getStartDate());
						rule.setEndDate(specialMapper.getEndDate());
						ruleLists.add(rule);
					}
				}

				List<TestCode> testCodeList = sponsorMapper.getTestCodeList();
				testList = new ArrayList<>();
				if (!CollectionUtils.isEmpty(testCodeList)) {
					for (TestCode testCode : testCodeList) {
						testList.add(testCode);
					}
				}
				sponsor = new Sponsor();
				sponsor.setName(sponsorMapper.getName());
				sponsor.setEmail(sponsorMapper.getEmail());
				sponsor.setPhone(sponsorMapper.getPhone());
				sponsor.setPostCode(sponsorMapper.getPostCode());
				sponsor.setBudget(sponsorMapper.getBudget());
				sponsor.setAddressList(sponsorAddressList);
				sponsor.setRuleList(ruleLists);
				sponsor.setTestCodeList(testList);
				sponsor.setPostCodeMinValue(sponsorMapper.getPostCodeMinValue());
				sponsor.setPostCodeMaxValue(sponsorMapper.getPostCodeMaxValue());
				Sponsor createSponsor = sponsorService.createSponsor(sponsor);
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
			response = new Response(sponsors, HttpStatus.OK, "Sponsors Found");
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
			response = new Response(sponserAddresses, HttpStatus.OK, "Sponsor Addresses Found");
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

	@Path("/testCodes/{sponsorId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getTestCodesBySponsorId(@PathParam("sponsorId") Integer sponsorId) {

		Response response = null;
		List<TestCode> testCodes = sponsorService.getTestCodesBySponsorId(sponsorId);
		if (!CollectionUtils.isEmpty(testCodes)) {
			response = new Response(testCodes, HttpStatus.OK, "TestCodes Found");
		} else {
			response = new Response("TestCode not Found", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;

	}

	@Path("/rules/{sponsorId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getSponsorRulesBySponsorId(@PathParam("sponsorId") Integer sponsorId) {

		Response response = null;
		List<Rule> rules = sponsorService.getSponsorRulesBySponsorId(sponsorId);
		if (!CollectionUtils.isEmpty(rules)) {
			response = new Response(rules, HttpStatus.OK, "Rules Found");
		} else {
			response = new Response("Rules not Found", HttpStatus.INTERNAL_SERVER_ERROR);

		}
		return response;

	}

}
