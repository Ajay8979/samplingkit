package com.medintu.samplingkit.dao;

import com.medintu.samplingkit.entity.PostalCode;

public class JpaPostalCodeDao extends JpaDao<PostalCode, Long> implements PostalCodeDao {

	public JpaPostalCodeDao() {
		super(PostalCode.class);
	}

}
