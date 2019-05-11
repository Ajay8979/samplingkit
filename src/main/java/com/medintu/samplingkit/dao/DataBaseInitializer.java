package com.medintu.samplingkit.dao;

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
		/*User userUser = new User("user", this.passwordEncoder.encode("user"));
		userUser.addRole(Role.USER);
		this.userDao.save(userUser);

		User adminUser = new User("admin", this.passwordEncoder.encode("admin"));
		adminUser.addRole(Role.SUBERADMIN);
		this.userDao.save(adminUser);

		long timestamp = System.currentTimeMillis() - (1000 * 60 * 60 * 24);*/
		
	}
}
