package com.medintu.samplingkit.dao;

import java.util.List;

import com.medintu.samplingkit.entity.TestResult;

public interface TestResultDao extends Dao<TestResult, Long>{

	Integer updateEnduser(String orderCode,String status);

	List<TestResult> getTestResultsByOrderCode(String orderCode);
	
	List<TestResult> getReactiveResultsBySponsorId(String sponsorId);
	
	List<TestResult> getNonReactiveResultsBySponsorId(String sponsorId);
}
