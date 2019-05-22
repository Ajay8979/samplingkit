package com.medintu.samplingkit.dao;

import java.util.List;

import javax.persistence.Query;

import com.medintu.samplingkit.entity.User;

public class JpaSponsorUserDao extends JpaDao<User, Long> implements SponsorUserDao {

	public JpaSponsorUserDao() {
		super(User.class);
	}

	@Override
	public List<User> getAllUsersBySponsorId(Long sponsorId) {
		Query createQuery = getEntityManager().createNativeQuery("select * from user s where s.sponsorId =" + sponsorId,
				User.class);

		return (List<User>) createQuery.getResultList();
	}

	@Override
	public List<User> getAllUsersBySponsor() {
		// select s.Email_Address, u.firstName from sponsor s left outer join user u on
		// s.id = u.sponsorId
		Query query = getEntityManager().createNativeQuery(
				"select u.username, u.firstName, u.lastName,u.status, u.emailId,u.mobileNum,u.sponsorId, s.sponsor_name, s.phone_number, s.postal_code,s.email_address from  user u left outer join sponsor s on u.sponsorId = s.id");
		return (List<User>) query.getResultList();

	}

	@Override
	public List<User> findAllSponsorUsersByCondition(String email, String mobileNum) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int totalUsersCount() {
		 Query nativeQuery = getEntityManager().createNativeQuery("select count(*) from user");
		 return ((Number) nativeQuery.getSingleResult()).intValue();
		 
	}

}
