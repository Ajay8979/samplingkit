package com.medintu.samplingkit.dao;

import java.util.List;

import com.medintu.samplingkit.entity.EndUser;

public interface EndUserDao extends Dao<EndUser, Long> {

	List<EndUser> getEndUsersBySponserId(Long sponserId);

}
