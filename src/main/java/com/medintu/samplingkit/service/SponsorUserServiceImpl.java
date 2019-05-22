package com.medintu.samplingkit.service;

import java.util.ArrayList;
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
	public List<User> getAllUsersPerPage(int pageSize, int pageNum) {
		List<User> findAll = sponsorUserDao.findAll();

		List<User> countPerPage = getCountPerPage(findAll, pageSize, pageNum);
		return countPerPage;
	}

	public List<User> getCountPerPage(List<User> list, int pageSize, int pageNo) {
		List<User> getAllFiltered = new ArrayList<>();
		if (list != null && !list.isEmpty()) {
			pageSize = pageSize > 0 ? pageSize : pageSize * -1;
			pageNo = pageNo > 0 ? pageNo : pageNo == 0 ? 1 : pageNo * -1;
			if (pageSize != 0) {
				int endIndex = pageNo * pageSize;
				int startIndex = endIndex - pageSize;
				endIndex = endIndex < list.size() ? endIndex : list.size();
				startIndex = startIndex < list.size() ? startIndex : 0;
				getAllFiltered = list.subList(startIndex, endIndex);
			}
		}
		return getAllFiltered;
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

	@Override
	public List<User> getAllUsersBySponsorByCondition(String email, String mobileNum) {
		List<User> usersByCondition = sponsorUserDao.findAllSponsorUsersByCondition(email, mobileNum);
		return usersByCondition;
	}

	@Override
	public int getAllUsersCount() {
		return sponsorUserDao.totalUsersCount();

	}

}
