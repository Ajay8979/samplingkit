package com.medintu.samplingkit.service;

import java.util.List;

import com.medintu.samplingkit.entity.TestResult;

public interface TestResultService {
	public TestResult createTestResult(TestResult ts);
	Integer updateEnduser(TestResult testResult);
	public List<TestResult> getTestResultsByOrderCode(String orderCode);
}
