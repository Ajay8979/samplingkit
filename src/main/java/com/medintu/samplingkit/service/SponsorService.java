package com.medintu.samplingkit.service;

import java.util.List;

import com.medintu.samplingkit.entity.Rule;
import com.medintu.samplingkit.entity.Sponsor;
import com.medintu.samplingkit.entity.SponsorAddress;
import com.medintu.samplingkit.entity.TestCode;

public interface SponsorService {

	public Sponsor createSponsor(Sponsor sponsor);

	public Sponsor findSponsorById(Long id);

	public List<Sponsor> getAllSponsors();

	public Sponsor updateSponsor(Long id, Sponsor sponsor);

	public void deleteSponsorById(Long id);

	public List<SponsorAddress> getSponsorAddressesBySponsorId(Integer sponsorId);

	public Sponsor getSponsorBySponsorId(Integer sponsorId);

	public List<TestCode> getTestCodesBySponsorId(Integer sponsorId);

	public List<Rule> getSponsorRulesBySponsorId(Integer sponsorId);

}
