package com.medintu.samplingkit.rest.resources;

import java.util.ArrayList;
import java.util.List;

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

import com.medintu.samplingkit.dao.RuleDao;
import com.medintu.samplingkit.dao.RuleEthnicGroupDao;
import com.medintu.samplingkit.dao.RuleTestCodeDao;
import com.medintu.samplingkit.entity.EthnicGroup;
import com.medintu.samplingkit.entity.Rule;
import com.medintu.samplingkit.entity.RuleEthnicGroup;
import com.medintu.samplingkit.entity.RuleMapper;
import com.medintu.samplingkit.entity.RuleTestCode;
import com.medintu.samplingkit.entity.TestCode;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.service.RuleService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Path("rules")
public class RuleResourceController {

	@Autowired
	private RuleService ruleService;

	@Autowired
	private RuleDao ruleDao;

	@Autowired
	private RuleEthnicGroupDao ruleEthnicGroupDao;

	@Autowired
	private RuleTestCodeDao ruleTestCodeDao;

	@Path("/create")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createRules(RuleMapper ruleMapper) {

		Response response = null;

		Rule rule = new Rule();
		BeanUtils.copyProperties(ruleMapper, rule);
		rule.setStatus("Active");
		List<Rule> rulList = new ArrayList<Rule>();
		rulList.add(rule);
		try {
			ruleService.createRule(rulList);
			response = new Response(HttpStatus.OK, "Rule created successfully");

		} catch (Exception e) {
			response = new Response(HttpStatus.CONFLICT, "Rule not created ");
		}

		return response;
	}

	@Path("/createRuleList")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createRuleList(List<RuleMapper> ruleMapperList) {

		Response response = null;
		List<Rule> rulList = new ArrayList<Rule>();
		for (RuleMapper ruleMapper : ruleMapperList) {
			Rule rule = new Rule();
			BeanUtils.copyProperties(ruleMapper, rule);
			rule.setStatus("Active");
			rulList.add(rule);
		}
		try {
			ruleService.createRule(rulList);
			response = new Response(HttpStatus.OK, "Rule created successfully");

		} catch (Exception e) {
			response = new Response(HttpStatus.CONFLICT, "Rule not created ");
		}
		return response;
	}

	@Path("/createRuleListMapper")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createRuleListMapper(List<RuleMapper> ruleMapperList) {

		Response response = null;
		List<Rule> rulList = new ArrayList<Rule>();
		for (RuleMapper ruleMapper : ruleMapperList) {
			Rule rule = new Rule();
			BeanUtils.copyProperties(ruleMapper, rule);
			rule.setStatus("Active");
			Rule createdRule = ruleDao.save(rule);
			for (EthnicGroup ethnicGroup : ruleMapper.getEthnicGroups()) {
				RuleEthnicGroup ruleEthnicGroup = new RuleEthnicGroup();
				ruleEthnicGroup.setEthnicId(ethnicGroup.getId());
				ruleEthnicGroup.setRuleId(createdRule.getId());
				ruleEthnicGroupDao.save(ruleEthnicGroup);
			}

			for (TestCode testCode : ruleMapper.getTestCodes()) {
				RuleTestCode ruleTestCode = new RuleTestCode();
				ruleTestCode.setTestcodeId(testCode.getId());
				ruleTestCode.setRuleId(createdRule.getId());
				ruleTestCodeDao.save(ruleTestCode);
			}
		}
		try {
			ruleService.createRule(rulList);
			response = new Response(HttpStatus.OK, "Rule created successfully");

		} catch (Exception e) {
			response = new Response(HttpStatus.CONFLICT, "Rule not created ");
		}
		return response;
	}

	@Path("/updateStatus/{ruleId}/{status}")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateRuleStatus(@PathParam("ruleId") Long ruleId, @PathParam("status") String status) {

		Response response = null;

		if (ruleService.updateRuleStatus(ruleId, status)) {
			response = new Response(HttpStatus.OK, "Rule status updated successfully");

		} else {
			response = new Response(HttpStatus.OK, "Rule status not updated ");
		}
		return response;

	}

	@Path("/update")
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateSponsorRulesById(RuleMapper ruleMapper) {

		Rule rule = new Rule();
		Response response = null;
		BeanUtils.copyProperties(ruleMapper, rule);

		try {
			Rule createdRule = ruleDao.save(rule);

			ruleDao.deleteEthnicGroupsBySponsorId(ruleMapper.getId());
			ruleDao.deleteTestCodesBySponsorId(ruleMapper.getId());

			for (EthnicGroup ethnicGroup : ruleMapper.getEthnicGroups()) {
				RuleEthnicGroup ruleEthnicGroup = new RuleEthnicGroup();
				ruleEthnicGroup.setEthnicId(ethnicGroup.getId());
				ruleEthnicGroup.setRuleId(createdRule.getId());
				ruleEthnicGroupDao.save(ruleEthnicGroup);
			}

			for (TestCode testCode : ruleMapper.getTestCodes()) {
				RuleTestCode ruleTestCode = new RuleTestCode();
				ruleTestCode.setTestcodeId(testCode.getId());
				ruleTestCode.setRuleId(createdRule.getId());
				ruleTestCodeDao.save(ruleTestCode);
			}
			response = new Response("Rule updated successfully ", HttpStatus.OK);

		} catch (Exception e) {
			response = new Response("Rule not updated ", HttpStatus.CONFLICT);
		}

		return response;
	}

	@Path("/{sponsorId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getRulesBySponsorId(@PathParam("sponsorId") Integer sponsorId) {

		Response response = null;
		// List<R> rules = sponsorService.getSponsorRulesBySponsorId(sponsorId);
		List<RuleMapper> ruleMappers = ruleDao.getRulesBySponsorId(sponsorId);
		if (!CollectionUtils.isEmpty(ruleMappers)) {
			response = new Response(ruleMappers, 0, ruleMappers.size(), HttpStatus.OK, "Rules Found");
		} else {
			response = new Response("Rules not Found", HttpStatus.INTERNAL_SERVER_ERROR);

		}
		return response;

	}

}
