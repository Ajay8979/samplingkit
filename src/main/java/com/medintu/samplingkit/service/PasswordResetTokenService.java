package com.medintu.samplingkit.service;

import com.medintu.samplingkit.entity.User;

public interface PasswordResetTokenService {

	void createPasswordResetTokenForUser(User user, String token);


	String validatePasswordResetToken(Long id, String token);

}
