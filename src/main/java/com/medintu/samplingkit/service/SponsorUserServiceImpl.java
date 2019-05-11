package com.medintu.samplingkit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.medintu.samplingkit.dao.SponsorUserDao;
import com.medintu.samplingkit.entity.User;

public class SponsorUserServiceImpl implements SponsorUserService {

	@Autowired
	private SponsorUserDao sponsorUserDao;

	private PasswordEncoder passwordEncoder;

	public SponsorUserServiceImpl() {
	}

	public SponsorUserServiceImpl(SponsorUserDao sponsorUserDao) {
		this.sponsorUserDao = sponsorUserDao;
	}

	public SponsorUserServiceImpl(SponsorUserDao sponsorUserDao, PasswordEncoder passwordEncoder) {
		this.sponsorUserDao = sponsorUserDao;
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	public User saveUser(User user) {
		/*
		 * User user2 = new User(user.getUsername(),
		 * this.passwordEncoder.encode(user.getPassword()), user.getSponsorId(),
		 * user.getMobileNo(), user.getEmailId());
		 */
		
		user.setPassword(this.passwordEncoder.encode(user.getPassword()));
		
		return sponsorUserDao.save(user);
	}

	@Override
	public User findUserById(Long id) {
		return sponsorUserDao.find(id);
	}

	@Override
	public List<User> getAllUsers() {
		

		return sponsorUserDao.findAll();
		
	}

	@Override
	public void deleteUserById(Long id) {
		sponsorUserDao.delete(id);
	}

	@Override
	public List<User> getAllUsersBySponsorId(Long sponsorId) {
		return sponsorUserDao.getAllUsersBySponsorId(sponsorId);
	}

	@Override
	public List<User> getAllUsersBySponsor() {
		return sponsorUserDao.getAllUsersBySponsor();
	}

}
