package com.medintu.samplingkit.service;

import java.util.List;

import com.medintu.samplingkit.entity.EndUser;
import com.medintu.samplingkit.entity.EndUserMapper;

public interface EndUserService {

	Boolean validateAgeAndPostCode(Integer age, String postCode);
	
	Long validateGenderAndEthnicGroup(EndUserMapper endUserMapper);
	
	Boolean addEndUser(EndUser endUser);

	List<EndUser> getEndUsersBySponserId(Long sponserId);
}
