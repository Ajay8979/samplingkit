package com.medintu.samplingkit.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.medintu.samplingkit.entity.EndUser;

public class JpaEndUserDao extends JpaDao<EndUser, Long> implements EndUserDao {

	private EntityManager entityManager;

	public JpaEndUserDao() {
		super(EndUser.class);
	}

	public EntityManager getEntityManager() {
		return this.entityManager;
	}

	@PersistenceContext
	public void setEntityManager(final EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public List<EndUser> getEndUsersBySponserId(Long sponserId) {

		Query query = this.entityManager.createNativeQuery("select * from end_user e where e.sponsorId=?",
				EndUser.class);
		query.setParameter(1, sponserId);
		return query.getResultList();
	}

}
