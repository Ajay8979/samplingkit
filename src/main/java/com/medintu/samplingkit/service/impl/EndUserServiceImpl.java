package com.medintu.samplingkit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medintu.samplingkit.dao.EndUserDao;
import com.medintu.samplingkit.dao.SponsorDao;
import com.medintu.samplingkit.entity.EndUser;
import com.medintu.samplingkit.entity.EndUserMapper;
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
	public Boolean addEndUser(EndUser endUser) {
		if (null != endUserDao.save(endUser)) {
			return true;
		}
		return false;
	}
	
	@Override
	public List<EndUser> getEndUsersBySponserId(Long sponserId) {
		return endUserDao.getEndUsersBySponserId(sponserId);
	}
}
