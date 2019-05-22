package com.medintu.samplingkit.dao;

import com.medintu.samplingkit.entity.TestCode;

public interface TestCodeDao extends Dao<TestCode,Long> {

	public int totalTestCodesCount();
	
	TestCode findTestCodeByCondition(String testName,String testCode);
}
