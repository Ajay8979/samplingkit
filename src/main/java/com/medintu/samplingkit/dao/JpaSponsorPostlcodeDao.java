package com.medintu.samplingkit.dao;

import javax.transaction.Transactional;

import com.medintu.samplingkit.entity.SponsorPostlcode;

public class JpaSponsorPostlcodeDao extends JpaDao<SponsorPostlcode, Long> implements SponsorPostlcodeDao {

	public JpaSponsorPostlcodeDao() {
		super(SponsorPostlcode.class);
	}

	@Override
	@Transactional
	public int deletePostalCodesBySponsorId(Long sponsorId) {

		return getEntityManager().createNativeQuery("delete from sponsor_postlcode  where sponsor_id=" + sponsorId)
				.executeUpdate();
	}

}
