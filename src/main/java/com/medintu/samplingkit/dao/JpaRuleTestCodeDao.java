package com.medintu.samplingkit.dao;

import com.medintu.samplingkit.entity.RuleTestCode;

public class JpaRuleTestCodeDao extends JpaDao<RuleTestCode, Long> implements RuleTestCodeDao {

	public JpaRuleTestCodeDao() {
		super(RuleTestCode.class);
	}

}
