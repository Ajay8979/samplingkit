package com.medintu.samplingkit.service;

import java.util.List;
import java.util.Set;

import com.medintu.samplingkit.entity.EndUser;
import com.medintu.samplingkit.entity.EndUserMapper;
import com.medintu.samplingkit.entity.TestCode;

public interface EndUserService {

	Boolean validateAgeAndPostCode(Integer age, String postCode);
	
	Long validateGenderAndEthnicGroup(EndUserMapper endUserMapper);
	
	EndUser addEndUser(EndUser endUser);

	List<EndUser> getEndUsersBySponserId(Long sponserId);

	List<EndUser> getEndUsers();

	List<EndUser> getEndUsersByOrderCode(String orderCode);

	//public EndUser updateEthnicGroupById(EndUser endUser);

	EndUser updateEndUserById(EndUser endUser);

	Set<TestCode> getDefaultTestCodes(EndUserMapper endUserMapper);
}
