package com.medintu.samplingkit.dao;

import com.medintu.samplingkit.entity.EthnicGroup;

public class JpaEthnicGroupDao extends JpaDao<EthnicGroup, Long> implements EthnicGroupDao {

	public JpaEthnicGroupDao() {
		super(EthnicGroup.class);
	}
}
