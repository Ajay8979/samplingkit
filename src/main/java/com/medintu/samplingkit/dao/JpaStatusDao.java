package com.medintu.samplingkit.dao;

import com.medintu.samplingkit.entity.Status;

public class JpaStatusDao extends JpaDao<Status, Long> implements StatusDao{

	public JpaStatusDao() {
		super(Status.class);
	}

}
