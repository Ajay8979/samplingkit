package com.medintu.samplingkit.dao;

import java.util.List;

import javax.persistence.Query;
import javax.transaction.Transactional;

import com.medintu.samplingkit.entity.EndUser;
import com.medintu.samplingkit.entity.TestResult;

public class JpaTestResultDao extends JpaDao<TestResult, Long> implements TestResultDao {

	public JpaTestResultDao() {
		super(TestResult.class);
	}

	@Override
	@Transactional
	public Integer updateEnduser(String orderCode, String status) {
		Query query = getEntityManager().createNativeQuery("update end_user set status=? where orderCode = ?",
				EndUser.class);
		query.setParameter(1, status);
		query.setParameter(2, orderCode);
		int executeUpdate = query.executeUpdate();
		System.out.println("executeUpdate" + executeUpdate);
		return executeUpdate;
	}

	@Override
	public List<TestResult> getTestResultsByOrderCode(String orderCode) {
		Query query = getEntityManager()
				.createNativeQuery("select * from test_result where orderId= '" + orderCode + "'", TestResult.class);
		return query.getResultList();
	}

	@Override
	public List<TestResult> getReactiveResultsBySponsorId(String sponsorId) {

		String queryString = "select * from test_result where testResult=?";
		if (sponsorId != null) {
			queryString = queryString + " and sponserId=?";
		}

		Query query = getEntityManager().createNativeQuery(queryString, TestResult.class);
		query.setParameter(1, "Reactive");
		if (sponsorId != null) {
			query.setParameter(2, sponsorId);
		}
		return query.getResultList();
	}

	@Override
	public List<TestResult> getNonReactiveResultsBySponsorId(String sponsorId) {

		String queryString = "select * from test_result where testResult=?";
		if (sponsorId != null) {
			queryString = queryString + " and sponserId=?";
		}
		Query query = getEntityManager().createNativeQuery(queryString, TestResult.class);
		query.setParameter(1, "Non-Reactive");
		if (sponsorId != null) {
			query.setParameter(2, sponsorId);
		}
		return query.getResultList();
	}

}
