package com.medintu.samplingkit.service;

import java.util.List;

import com.medintu.samplingkit.entity.Rule;

public interface RuleService {
	
	public Rule createRule(Rule rule);

	public Rule findRuleById(Long id);

	public List<Rule> getRule();

	public Rule updateRule(Rule rule);

	public void deleteRuleById(Long id);

}
