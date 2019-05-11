package com.medintu.samplingkit.service;

import java.util.List;

import com.medintu.samplingkit.entity.TestCode;

public interface TestCodeService {
	TestCode createTestCode(TestCode testCode);

	List<TestCode> getAllTestcodes();

	TestCode findTestcodeById(Long id);

	void deleteTestCode(Long id);

	TestCode updateTestCode(TestCode testCode);

}
