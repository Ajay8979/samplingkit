package com.medintu.samplingkit.dao;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.medintu.samplingkit.entity.AccessToken;
import com.medintu.samplingkit.entity.User;
import com.medintu.samplingkit.response.Response;

public interface UserDao extends Dao<User, Long> {
	User loadUserByUsername(String username) throws UsernameNotFoundException;

	User findByName(String name);

	Response findAllUsersByPaging(int pageId, int pageSize);
	
	AccessToken findAccessTokenByUserId(Long id,String token);
	
	Response findUsersByRole(int pageId,int pageSize);
	
	Response findAdminsByRole(int pageId,int pageSize);
	
}
