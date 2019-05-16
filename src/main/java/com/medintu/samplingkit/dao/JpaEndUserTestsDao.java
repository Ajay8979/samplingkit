package com.medintu.samplingkit.dao;

import com.medintu.samplingkit.entity.EndUserTests;

public class JpaEndUserTestsDao extends JpaDao<EndUserTests, Long> implements EndUserTestsDao {

	public JpaEndUserTestsDao() {
		super(EndUserTests.class);
	}

}
