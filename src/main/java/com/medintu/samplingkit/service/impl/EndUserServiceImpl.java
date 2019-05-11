package com.medintu.samplingkit.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.medintu.samplingkit.dao.EndUserDao;
import com.medintu.samplingkit.dao.SponsorDao;
import com.medintu.samplingkit.entity.EndUser;
import com.medintu.samplingkit.entity.EndUserMapper;
import com.medintu.samplingkit.service.EndUserService;

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
	public Boolean validateGenderAndEthnicGroup(EndUserMapper endUserMapper) {

		if (sponsorDao.getSponsorsByPostCode(endUserMapper.getAge(), endUserMapper.getPostCode())
				&& sponsorDao.getSponsorsByPostCode(endUserMapper.getPostCode(), endUserMapper.getGender(),
						endUserMapper.getEthnicGroup())) {
			return true;
		}

		return false;
	}

	@Override
	public Boolean addEndUser(EndUser endUser) {
		if (null != endUserDao.save(endUser)) {
			return true;
		}
		return false;
	}
}
