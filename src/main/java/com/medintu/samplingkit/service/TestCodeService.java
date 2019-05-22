package com.medintu.samplingkit.service;

import java.util.List;

import com.medintu.samplingkit.entity.TestCode;

public interface TestCodeService {
	
	TestCode createTestCode(TestCode testCode);

	List<TestCode> getAllTestcodes();

	List<TestCode> getAllTestcodesPerPage(int pageSize,int pageNum);
	
	TestCode findTestcodeById(Long id);

	void deleteTestCode(Long id);

	TestCode updateTestCode(TestCode testCode);

	int getToalTestCodeCount();
	
	TestCode getTestCodeByCondition(String testName,String testCode );
}
