package com.medintu.samplingkit.service.impl;

import java.util.List;
import java.util.UUID;

import org.springframework.transaction.annotation.Transactional;

import com.medintu.samplingkit.dao.AccessTokenDao;
import com.medintu.samplingkit.dao.UserDao;
import com.medintu.samplingkit.entity.AccessToken;
import com.medintu.samplingkit.entity.User;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.service.UserService;

/**
 * @author Philip Washington Sorst <philip@sorst.net>
 */
public class DaoUserService implements UserService {
	private UserDao userDao;

	private AccessTokenDao accessTokenDao;

	protected DaoUserService() {
		/* Reflection instantiation */
	}

	public DaoUserService(UserDao userDao, AccessTokenDao accessTokenDao) {
		this.userDao = userDao;
		this.accessTokenDao = accessTokenDao;
	}

	@Override
	@Transactional
	public User findUserByAccessToken(String accessTokenString) {
		AccessToken accessToken = this.accessTokenDao.findByToken(accessTokenString);

		if (null == accessToken) {
			return null;
		}

		if (accessToken.isExpired()) {
			this.accessTokenDao.delete(accessToken);
			return null;
		}

		return accessToken.getUser();
	}

	@Override
	@Transactional
	public AccessToken createAccessToken(User user) {
		AccessToken accessToken = new AccessToken(user, UUID.randomUUID().toString());
		return this.accessTokenDao.save(accessToken);
	}

	@Override
	public User createUser(User user) {
		Long id=userDao.calculateMaxId(user);
		//user.setU_id("TU"+(++id));
		return userDao.save(user);
	}

	@Override
	public Response findByAllUser(int pgNum,int pgSize) {
		return userDao.findAllUsersByPaging(pgNum, pgSize);
	}

	@Override
	public User findByPrimaryKey(Long id) {
		return userDao.find(id);
	}

	@Override
	public User updateUser(User user) {
		return userDao.save(user);
	}

	@Override
	public User saveProfile(User user) {
		
		return userDao.save(user);
	}

	@Override
	public User loadUserByUsername(String username) {
		return userDao.loadUserByUsername(username);
	}

	@Override
	public List<User> findByAllUser() {
		
		return userDao.findAll();
	}

	@Override
	public User changePwd(User user) {
		return userDao.save(user);
	}

	@Override
	public User saveNewPassword(Long id, String newPassword) {
		User userObj = userDao.find(id);
		if(null != userObj){
			userObj.setPassword(newPassword);
			userObj = userDao.save(userObj);
			return userObj;
		}
		return userObj;
	}

	@Override
	public AccessToken findAccessTokenByUserId(Long id,String token) {
		return userDao.findAccessTokenByUserId(id,token);
	}

	@Override
	public AccessToken updateAccessToken(AccessToken token) {
		return accessTokenDao.save(token);
	}

	@Override
	public Response findUsersByRoles(int pgNum, int pgSize) {
		return userDao.findUsersByRole(pgNum, pgSize);
	}

	@Override
	public Response findAdminsByRoles(int pgNum, int pgSize) {
		return userDao.findAdminsByRole(pgNum, pgSize);
		}

	
	
}
