package com.medintu.samplingkit.dao;

import java.util.List;

import javax.persistence.Query;

import com.medintu.samplingkit.entity.EthnicGroup;

public class JpaEthnicGroupDao extends JpaDao<EthnicGroup, Long> implements EthnicGroupDao {

	public JpaEthnicGroupDao() {
		super(EthnicGroup.class);
	}

	@Override
	public List<String> getEthnicByGroup() {

		Query query = getEntityManager()
				.createNativeQuery("SELECT ethnic_type FROM samplingkit.ethnic_group group by ethnic_type");
		return query.getResultList();
	}
}
