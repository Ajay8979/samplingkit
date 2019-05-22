package com.medintu.samplingkit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.medintu.samplingkit.dao.TestResultDao;
import com.medintu.samplingkit.entity.TestResult;
import com.medintu.samplingkit.service.TestResultService;

public class TestResultServiceImpl implements TestResultService {

	@Autowired
	private TestResultDao testResultdao;

	@Override
	public TestResult createTestResult(TestResult testResult) {

		TestResult testResult1 = testResultdao.save(testResult);

		return testResult1;
	}

	@Override
	public Integer updateEnduser(TestResult testResult) {

		return testResultdao.updateEnduser(testResult.getOrderId(), testResult.getSTATUS());
	}

	@Override
	public List<TestResult> getTestResultsByOrderCode(String orderCode) {
		return testResultdao.getTestResultsByOrderCode(orderCode);
	}

}
