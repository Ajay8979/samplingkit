package com.medintu.samplingkit.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import com.medintu.samplingkit.dao.RuleDao;
import com.medintu.samplingkit.entity.Rule;

public class RuleServiceImpl implements RuleService {

	@Autowired
	private RuleDao ruleDao;

	@Override
	@Transactional(rollbackOn = Exception.class)
	public void createRule(List<Rule> rulList) throws Exception {

		for (Rule rule : rulList) {
			ruleDao.save(rule);
		}

	}

	@Override
	public Rule findRuleById(Long id) {
		// TODO Auto-generated method stub
		return ruleDao.find(id);
	}

	@Override
	public List<Rule> getRule() {
		// TODO Auto-generated method stub
		return ruleDao.findAll();
	}

	@Override
	public Rule updateRule(Rule rule) {
		// TODO Auto-generated method stub
		return ruleDao.save(rule);
	}

	@Override
	public void deleteRuleById(Long id) {
		// TODO Auto-generated method stub
		ruleDao.delete(id);
	}

	@Override
	public boolean updateRuleStatus(Long ruleId, String status) {

		if (ruleDao.updateRuleStatus(ruleId, status) > 0) {
			return true;
		}
		return false;
	}

}
