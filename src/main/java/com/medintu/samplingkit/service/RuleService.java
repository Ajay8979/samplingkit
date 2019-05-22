package com.medintu.samplingkit.service;

import java.util.List;

import com.medintu.samplingkit.entity.Rule;

public interface RuleService {
	
	public void createRule(List<Rule> rulList) throws Exception;

	public Rule findRuleById(Long id);

	public List<Rule> getRule();

	public Rule updateRule(Rule rule);

	public void deleteRuleById(Long id);

	public boolean updateRuleStatus(Long ruleId, String status);

}
