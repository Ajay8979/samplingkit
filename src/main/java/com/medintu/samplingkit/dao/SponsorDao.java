package com.medintu.samplingkit.dao;

import java.util.List;

import com.medintu.samplingkit.entity.Rule;
import com.medintu.samplingkit.entity.Sponsor;
import com.medintu.samplingkit.entity.SponsorAddress;
import com.medintu.samplingkit.entity.TestCode;

public interface SponsorDao extends Dao<Sponsor, Long> {

	Boolean getSponsorsByPostCode(Integer age, String postCode);

	Boolean getSponsorsByPostCode(String postCode, String gender, String ethnicGroup);

	List<Sponsor> getAllSponsors();

	List<SponsorAddress> getAddressBySPonsorId(Integer sponsorId);

	Sponsor getSponsorBySponsorId(Integer sponsorId);

	List<TestCode> getTestCodesBySponsorId(Integer sponsorId);

	List<Rule> getSponsorRulesBySponsorId(Integer sponsorId);
}
