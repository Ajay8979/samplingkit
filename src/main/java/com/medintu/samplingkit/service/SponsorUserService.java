package com.medintu.samplingkit.service;

import java.util.List;

import com.medintu.samplingkit.entity.User;

public interface SponsorUserService {
	
	public User saveUser(User user);
	
	public User findUserById(Long id);
	
	public List<User> getAllUsers();
	
	public List<User> getAllUsersPerPage(int pageSize,int pageNum);
	
	public void deleteUserById(Long id);

	public List<User> getAllUsersBySponsorId(Long sponsorId);
	
	public List<User> getAllUsersBySponsor();

	public List<User>  getAllUsersBySponsorByCondition(String email, String mobileNum);

	public int getAllUsersCount();
	
	
}
