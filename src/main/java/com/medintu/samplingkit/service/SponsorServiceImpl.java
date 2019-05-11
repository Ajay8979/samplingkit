package com.medintu.samplingkit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medintu.samplingkit.dao.SponsorDao;
import com.medintu.samplingkit.entity.Rule;
import com.medintu.samplingkit.entity.Sponsor;
import com.medintu.samplingkit.entity.SponsorAddress;
import com.medintu.samplingkit.entity.TestCode;

@Service
public class SponsorServiceImpl implements SponsorService {

	@Autowired
	private SponsorDao sponsorDao;

	@Override
	public Sponsor createSponsor(Sponsor sponsor) {

		return sponsorDao.save(sponsor);
	}

	@Override
	public Sponsor findSponsorById(Long id) {

		return sponsorDao.find(id);
	}

	@Override
	public List<Sponsor> getAllSponsors() {
		return sponsorDao.getAllSponsors();
	}

	@Override
	public Sponsor updateSponsor(Long id, Sponsor sponsor) {
		return sponsorDao.save(sponsor);
	}

	@Override
	public void deleteSponsorById(Long id) {
		sponsorDao.delete(id);

	}

	@Override
	public List<SponsorAddress> getSponsorAddressesBySponsorId(Integer sponsorId) {
		return sponsorDao.getAddressBySPonsorId(sponsorId);
	}

	@Override
	public Sponsor getSponsorBySponsorId(Integer sponsorId) {
		return sponsorDao.getSponsorBySponsorId(sponsorId);
	}

	@Override
	public List<TestCode> getTestCodesBySponsorId(Integer sponsorId) {
		return sponsorDao.getTestCodesBySponsorId(sponsorId);
	}

	@Override
	public List<Rule> getSponsorRulesBySponsorId(Integer sponsorId) {
		return sponsorDao.getSponsorRulesBySponsorId(sponsorId);
	}

}
