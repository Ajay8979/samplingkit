package com.medintu.samplingkit.dao;

import com.medintu.samplingkit.entity.SponsorAddress;

public class JpaSponsorAddressDao extends JpaDao<SponsorAddress, Long> implements SponsorAddressDao {

	public JpaSponsorAddressDao() {
		super(SponsorAddress.class);
		// TODO Auto-generated constructor stub
	}

}
