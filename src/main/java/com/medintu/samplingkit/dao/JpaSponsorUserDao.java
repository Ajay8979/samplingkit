package com.medintu.samplingkit.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.medintu.samplingkit.entity.User;

public class JpaSponsorUserDao extends JpaDao<User, Long> implements SponsorUserDao {

	private EntityManager entityManager;

	public EntityManager getEntityManager() {
		return this.entityManager;
	}

	@PersistenceContext
	public void setEntityManager(final EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	public JpaSponsorUserDao() {
		super(User.class);
	}

	@Override
	public List<User> getAllUsersBySponsorId(Long sponsorId) {
		Query createQuery = this.entityManager.createNativeQuery("select s.username,s.firstName,s.lastName,s.mobileNum,s.emailId from user s where s.sponsorId ="+sponsorId);
		
		List<User> resultList = createQuery.getResultList();
		System.out.println(resultList);
		return resultList;
	}

	@Override
	public List<User> getAllUsersBySponsor() {
		//select s.Email_Address, u.firstName from sponsor s left outer join user u on s.id = u.sponsorId
		Query query = this.entityManager.createNativeQuery("select u.username, u.firstName, u.lastName,u.status, u.emailId,u.mobileNum,u.sponsorId, s.Sponsor_Name, s.Phone_Number, s.postal_code,s.Email_Address from  user u left outer join sponsor s on u.sponsorId = s.id");
		return query.getResultList();
		
	}

	
}
