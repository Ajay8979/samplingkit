package com.medintu.samplingkit.dao;

import com.medintu.samplingkit.entity.TestCode;

public class JpaTestCodeDao extends JpaDao<TestCode, Long> implements TestCodeDao {
	public JpaTestCodeDao() {
		super(TestCode.class);
	}
}
