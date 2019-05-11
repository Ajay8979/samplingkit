package com.medintu.samplingkit.service;

import com.medintu.samplingkit.entity.User;

public interface VerificationTokenService {

	void createVerificationTokenForUser(User user,String token);
	
	String validateVerificationToken(String token);
	
	User findUserByVerificationToken(String token);

	void deleteVerificationTokenForUser(String token);
	
}
