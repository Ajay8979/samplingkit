package com.medintu.samplingkit.service;

import com.medintu.samplingkit.entity.EndUser;
import com.medintu.samplingkit.entity.EndUserMapper;

public interface EndUserService {

	Boolean validateAgeAndPostCode(Integer age, String postCode);
	
	Boolean validateGenderAndEthnicGroup(EndUserMapper endUserMapper);
	
	Boolean addEndUser(EndUser endUser);
}
