package com.medintu.samplingkit.service;

import java.util.List;

import com.medintu.samplingkit.entity.User;

public interface UserDetailsService {
	public User saveUser(User user);
	
	public User findUserById(Long id);
	
	public List<User> getAllUsers();
	
	public void deleteUserById(Long id);

}
