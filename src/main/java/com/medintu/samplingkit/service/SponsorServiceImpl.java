package com.medintu.samplingkit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medintu.samplingkit.dao.RuleDao;
import com.medintu.samplingkit.dao.SponsorAddressDao;
import com.medintu.samplingkit.dao.SponsorDao;
import com.medintu.samplingkit.entity.PostalCode;
import com.medintu.samplingkit.entity.Rule;
import com.medintu.samplingkit.entity.RuleDetailsMapper;
import com.medintu.samplingkit.entity.Sponsor;
import com.medintu.samplingkit.entity.SponsorAddress;
import com.medintu.samplingkit.entity.TestCode;

@Service
public class SponsorServiceImpl implements SponsorService {

	@Autowired
	private SponsorDao sponsorDao;

	@Autowired
	private RuleDao ruleDao;

	@Autowired
	private SponsorAddressDao addressDao;

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
	public List<Rule> getSponsorRulesBySponsorId(Integer sponsorId) {
		return sponsorDao.getSponsorRulesBySponsorId(sponsorId);
	}

	@Override
	public Rule updateSponsorRulesById(Rule rule) {
		return ruleDao.save(rule);
	}

	@Override
	public SponsorAddress updateSponsorAddressesById(SponsorAddress sponsorAddress) {
		return addressDao.save(sponsorAddress);
	}

	@Override
	public List<PostalCode> getPostCodesBySponsorId(Long sponsorId) {
		return sponsorDao.getPostCodesBySponsorId(sponsorId);
	}

	public boolean updatePostCodesBySponsorId(PostalCode postalCode, Long sponsorId) {

		if (sponsorDao.updatePostCodesBySponsorId(postalCode, sponsorId) > 0) {
			return true;
		}
		return false;

	}
	
	public List<TestCode> getTestCodesBySponsorId(Long sponsorId){
		return sponsorDao.getTestCodesBySponsorId(sponsorId);
	}

	@Override
	public List<RuleDetailsMapper> getRuleDeatilsBySponsorId(Integer sponsorId) {
		return sponsorDao.getRuleDeatilsBySponsorId(sponsorId);
	}

}
