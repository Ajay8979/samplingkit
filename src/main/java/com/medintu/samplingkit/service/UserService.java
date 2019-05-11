package com.medintu.samplingkit.service;

import java.util.List;


import org.springframework.security.core.userdetails.UserDetailsService;

import com.medintu.samplingkit.entity.AccessToken;
import com.medintu.samplingkit.entity.User;
import com.medintu.samplingkit.response.Response;

/**
 * @author Philip Washington Sorst <philip@sorst.net>
 */
public interface UserService extends UserDetailsService {
	User findUserByAccessToken(String accessToken);

	AccessToken createAccessToken(User user);
	
	User loadUserByUsername(String username);
	
	User createUser(User user);

	Response findByAllUser(int pgNum,int pgSize);

	User findByPrimaryKey(Long id);

	User updateUser(User user);
	
	User saveProfile(User user);

	List<User> findByAllUser();

	User changePwd(User user);

	User saveNewPassword(Long id, String newPassword);
	
	AccessToken findAccessTokenByUserId(Long id,String token);
	
	AccessToken updateAccessToken(AccessToken token);
	
	Response findUsersByRoles(int pgNum,int pgSize);
	
	Response findAdminsByRoles(int pgNum,int pgSize);
	
	
	
}

