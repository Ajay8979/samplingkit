package com.medintu.samplingkit.dao;

import java.util.List;

import com.medintu.samplingkit.entity.EndUser;

public interface EndUserDao extends Dao<EndUser, Long> {

	List<EndUser> getEndUsersBySponserId(Long sponserId);

	List<EndUser> getEndUsersByOrderCode(String orderCode);
	
	List<EndUser> getorderPlacedBySponserId(String sponserId);
	
	List<EndUser> getorderDispatchedBySponserId(String sponserId);
	
	List<EndUser> getEndUsersInGivenDates(String stratDate, String endDate);

	List<EndUser> searchEndUser(String searchString);
}
