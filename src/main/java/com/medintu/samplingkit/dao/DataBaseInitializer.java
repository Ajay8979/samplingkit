package com.medintu.samplingkit.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.medintu.samplingkit.entity.Role;
import com.medintu.samplingkit.entity.User;


/**
 * Initialize the database with some test entries.
 *
 * @author Philip Washington Sorst <philip@sorst.net>
 */
public class DataBaseInitializer {

	private UserDao userDao;

	private PasswordEncoder passwordEncoder;

	protected DataBaseInitializer() {
		// Default constructor for reflection instantiation
	}

	public DataBaseInitializer(UserDao userDao, PasswordEncoder passwordEncoder) {
		this.userDao = userDao;
		this.passwordEncoder = passwordEncoder;

	}

	public void initDataBase() {
		
		User adminUser = new User("medintu", this.passwordEncoder.encode("medintu"));
		adminUser.setFirstName("medintu");
		adminUser.setLastName("medintu");
		adminUser.setEmailId("adminUser@medintu.com");
		adminUser.addRole(Role.SUPERADMIN);
		List<User> list = new ArrayList<User>();
		 list=userDao.findAll();
		if(null==list ||list.isEmpty()) {
		this.userDao.save(adminUser);
		}

		long timestamp = System.currentTimeMillis() - (1000 * 60 * 60 * 24);
		
	}
}
