package com.medintu.samplingkit.dao;

import com.medintu.samplingkit.entity.Rule;

public class JpaRuleDao extends JpaDao<Rule, Long> implements RuleDao {

	public JpaRuleDao() {
		super(Rule.class);
	}

}
