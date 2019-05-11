package com.medintu.samplingkit.service;

import java.util.List;

import com.medintu.samplingkit.dao.RuleDao;
import com.medintu.samplingkit.entity.Rule;

public class RuleServiceImpl implements RuleService {

	private RuleDao dao;
	@Override
	public Rule createRule(Rule rule) {
		// TODO Auto-generated method stub
		return dao.save(rule);
	}

	@Override
	public Rule findRuleById(Long id) {
		// TODO Auto-generated method stub
		return dao.find(id);
	}

	@Override
	public List<Rule> getRule() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Rule updateRule(Rule rule) {
		// TODO Auto-generated method stub
		return dao.save(rule);
	}

	@Override
	public void deleteRuleById(Long id) {
		// TODO Auto-generated method stub
		dao.delete(id);
	}

	

}
