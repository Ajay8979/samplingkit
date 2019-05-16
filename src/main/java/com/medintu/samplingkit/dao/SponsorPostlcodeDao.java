package com.medintu.samplingkit.dao;

import com.medintu.samplingkit.entity.SponsorPostlcode;

public interface SponsorPostlcodeDao extends Dao<SponsorPostlcode, Long> {

	int deletePostalCodesBySponsorId(Long sponsorId);

}
