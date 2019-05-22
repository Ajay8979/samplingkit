package com.medintu.samplingkit.dao;

import java.util.List;

import javax.persistence.Query;

import com.medintu.samplingkit.entity.EndUser;

public class JpaEndUserDao extends JpaDao<EndUser, Long> implements EndUserDao {

	public JpaEndUserDao() {
		super(EndUser.class);
	}

	@Override
	public List<EndUser> getEndUsersBySponserId(Long sponserId) {
		
		

		Query query = getEntityManager().createNativeQuery("select * from end_user e where e.sponsorId=?",
				EndUser.class);
		query.setParameter(1, sponserId);
		return query.getResultList();
	}

	@Override
	public List<EndUser> getEndUsersByOrderCode(String orderCode) {
		String queryString = "select * from end_user where status= ?";
		
		Query query = getEntityManager().createNativeQuery("select * from end_user e where e.orderCode=?",
				EndUser.class);
		query.setParameter(1, orderCode);
		return query.getResultList();
	}

	@Override
	public List<EndUser> getEndUsersInGivenDates(String stratDate, String endDate) {
		Query query = getEntityManager().createNativeQuery(
				"select * from end_user where created_date between '" + stratDate + "' and '" + endDate + "'",
				EndUser.class);
		return query.getResultList();
	}

	@Override
	public List<EndUser> searchEndUser(String searchString) {
		Query query = getEntityManager().createNativeQuery("select * from end_user where email= '" + searchString
				+ "' or mobile= '" + searchString + "' or orderCode ='" + searchString + "'", EndUser.class);
		return query.getResultList();
	}

	public List<EndUser> getorderPlacedBySponserId(String sponserId) {
		String queryString = "select * from end_user where status= ?";
		if (sponserId != null) {
			queryString = queryString + " and sponsorId=?";
		}
		Query query = getEntityManager().createNativeQuery(queryString, EndUser.class);

		query.setParameter(1, "In Progress");
		if (sponserId != null) {
			query.setParameter(2, sponserId);
		}

		return query.getResultList();

	}

	public List<EndUser> getorderDispatchedBySponserId(String sponserId) {
		String queryString = "select * from end_user where status= ?";
		if (sponserId != null) {
			queryString = queryString + " and sponsorId=?";
		}
		Query query = getEntityManager().createNativeQuery(queryString, EndUser.class);

		query.setParameter(1, "Dispatched");
		if (sponserId != null) {
			query.setParameter(2, sponserId);
		}

		return query.getResultList();
	}
}
