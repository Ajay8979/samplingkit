package com.medintu.samplingkit.service.impl;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medintu.samplingkit.dao.EndUserDao;
import com.medintu.samplingkit.dao.SponsorDao;
import com.medintu.samplingkit.entity.EndUser;
import com.medintu.samplingkit.entity.EndUserMapper;
import com.medintu.samplingkit.entity.TestCode;
import com.medintu.samplingkit.service.EndUserService;

@Service
public class EndUserServiceImpl implements EndUserService {

	@Autowired
	private SponsorDao sponsorDao;

	@Autowired
	private EndUserDao endUserDao;

	@Override
	public Boolean validateAgeAndPostCode(Integer age, String postCode) {

		return sponsorDao.getSponsorsByPostCode(age, postCode);

	}

	@Override
	public Long validateGenderAndEthnicGroup(EndUserMapper endUserMapper) {

		Long value = sponsorDao.getSponsorsByPostCode(endUserMapper.getPostCode(), endUserMapper.getGender(),
				endUserMapper.getEthnicGroupId(), endUserMapper.getAge());
		return value;

	}

	@Override
	public EndUser addEndUser(EndUser endUser) {
		return endUserDao.save(endUser);
	}

	@Override
	public List<EndUser> getEndUsersBySponserId(Long sponserId) {
		return endUserDao.getEndUsersBySponserId(sponserId);
	}

	@Override
	public List<EndUser> getEndUsers() {
		return endUserDao.findAll();
	}

	@Override
	public List<EndUser> getEndUsersByOrderCode(String orderCode) {
		return endUserDao.getEndUsersByOrderCode(orderCode);

	}

	@Override
	public EndUser updateEndUserById(EndUser endUser) {
		// TODO Auto-generated method stub
		return endUserDao.save(endUser);
	}

	@Override
	public Set<TestCode> getDefaultTestCodes(EndUserMapper endUserMapper) {
		return sponsorDao.getTestCodeByPostCode(endUserMapper.getPostCode(), endUserMapper.getGender(),
				endUserMapper.getEthnicGroupId(), endUserMapper.getAge());
	}

}
