package com.medintu.samplingkit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.medintu.samplingkit.dao.TestCodeDao;
import com.medintu.samplingkit.entity.TestCode;

public class TestCodeServiceImpl implements TestCodeService {

	@Autowired
	private TestCodeDao testCodeDao;

	@Override
	public TestCode createTestCode(TestCode testCode) {

		return testCodeDao.save(testCode);
	}

	@Override
	public List<TestCode> getAllTestcodes() {
		return testCodeDao.findAll();
	}

	@Override
	public TestCode findTestcodeById(Long id) {

		return testCodeDao.find(id);
	}

	@Override
	public void deleteTestCode(Long id) {
		testCodeDao.delete(id);

	}

	@Override
	public TestCode updateTestCode(TestCode testCode) {

		return testCodeDao.save(testCode);
	}

}
