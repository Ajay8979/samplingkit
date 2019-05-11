package com.medintu.samplingkit.dao;

import com.medintu.samplingkit.entity.User;

public class JpaUserDetailsDao extends JpaDao<User, Long> implements UserDetailsDao {

	public JpaUserDetailsDao() {
		super(User.class);
	}
}
