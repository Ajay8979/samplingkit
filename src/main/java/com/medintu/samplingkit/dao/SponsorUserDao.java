package com.medintu.samplingkit.dao;

import java.util.List;

import com.medintu.samplingkit.entity.User;

public interface SponsorUserDao extends Dao<User, Long> {

	List<User> getAllUsersBySponsorId(Long sponsorId);

	public List<User> getAllUsersBySponsor();
	
	public List<User> findAllSponsorUsersByCondition(String email, String mobileNum);
	
	public int totalUsersCount();
}
