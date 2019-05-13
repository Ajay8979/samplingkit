package com.medintu.samplingkit.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.medintu.samplingkit.entity.EthnicGroup;

public class JpaEthnicGroupDao extends JpaDao<EthnicGroup, Long> implements EthnicGroupDao {

	public JpaEthnicGroupDao() {
		super(EthnicGroup.class);
	}

	private EntityManager entityManager;

	public EntityManager getEntityManager() {
		return this.entityManager;
	}

	@PersistenceContext
	public void setEntityManager(final EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public List<String> getEthnicByGroup() {

		Query query = this.entityManager
				.createNativeQuery("SELECT ethnic_type FROM samplingkit.ethnic_group group by ethnic_type");
		return query.getResultList();
	}
}
