package com.medintu.samplingkit.service;

import java.util.List;

import com.medintu.samplingkit.dao.SponsorAddressDao;
import com.medintu.samplingkit.entity.SponsorAddress;

public class SponsorAddressServiceImpl implements SponsorAddressService {

	private SponsorAddressDao dao;
	@Override
	public SponsorAddress createSponsor(SponsorAddress sponsorAddress) {
		// TODO Auto-generated method stub
		return dao.save(sponsorAddress);
	}

	@Override
	public SponsorAddress findSponsorAddressById(Long id) {
		// TODO Auto-generated method stub
		return dao.find(id);
	}

	@Override
	public List<SponsorAddress> getAllSponsorAddresss() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public SponsorAddress updateSponsorAddress(SponsorAddress sponsor) {
		// TODO Auto-generated method stub
		return dao.save(sponsor);
	}

	@Override
	public void deleteSponsorById(Long id) {
		// TODO Auto-generated method stub
		dao.delete(id);
	}

}
