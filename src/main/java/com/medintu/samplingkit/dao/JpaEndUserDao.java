package com.medintu.samplingkit.dao;

import com.medintu.samplingkit.entity.EndUser;

public class JpaEndUserDao extends JpaDao<EndUser, Long> implements EndUserDao {

	public JpaEndUserDao() {
		super(EndUser.class);
	}

}
