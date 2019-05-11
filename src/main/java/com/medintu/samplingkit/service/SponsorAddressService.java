package com.medintu.samplingkit.service;

import java.util.List;

import com.medintu.samplingkit.entity.SponsorAddress;

public interface SponsorAddressService {
	
	public SponsorAddress createSponsor(SponsorAddress sponsorAddress);

	public SponsorAddress findSponsorAddressById(Long id);

	public List<SponsorAddress> getAllSponsorAddresss();

	public SponsorAddress updateSponsorAddress(SponsorAddress sponsorAddress);

	public void deleteSponsorById(Long id);

}
