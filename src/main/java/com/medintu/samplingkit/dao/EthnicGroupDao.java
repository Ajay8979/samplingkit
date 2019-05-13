package com.medintu.samplingkit.dao;

import java.util.List;

import com.medintu.samplingkit.entity.EthnicGroup;

//@Repository
public interface EthnicGroupDao extends Dao<EthnicGroup, Long> {

	List<String> getEthnicByGroup();

}
