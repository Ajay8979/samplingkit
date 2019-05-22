package com.medintu.samplingkit.dao;

import com.medintu.samplingkit.entity.RuleEthnicGroup;

public class JpaRuleEthnicGroupDao extends JpaDao<RuleEthnicGroup, Long> implements RuleEthnicGroupDao {

	public JpaRuleEthnicGroupDao() {
		super(RuleEthnicGroup.class);
	}

}
