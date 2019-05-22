package com.medintu.samplingkit.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;

import com.medintu.samplingkit.entity.TestCode;

public class JpaTestCodeDao extends JpaDao<TestCode, Long> implements TestCodeDao {
	public JpaTestCodeDao() {
		super(TestCode.class);
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
	public int totalTestCodesCount() {
		CriteriaBuilder builder = this.entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> createQuery = builder.createQuery(Long.class);
		createQuery.select(builder.count(createQuery.from(TestCode.class)));
		return this.entityManager.createQuery(createQuery).getSingleResult().intValue();

	}

	@Override
	public TestCode findTestCodeByCondition(String testName, String testCode) {
		
		Query query = this.entityManager.createNativeQuery(
				"select * from test_code t where t.test_name = '" + testName + "' or t.test_code= '" + testCode + "'",
				TestCode.class);
		TestCode testCodeObj= (TestCode) query.getSingleResult();
	
		return testCodeObj;
	}

}
