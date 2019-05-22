package com.medintu.samplingkit.service;

import java.util.ArrayList;
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
	public List<TestCode> getAllTestcodesPerPage(int pageSize, int pageNum) {
		List<TestCode> allTestCodes = testCodeDao.findAll();
		List<TestCode> countPerPage = getCountPerPage(allTestCodes, pageSize,pageNum);
		return countPerPage;
	}
	
	public List<TestCode> getCountPerPage(List<TestCode> list, int pageSize, int pageNo) {
		List<TestCode> getAllFiltered = new ArrayList<>();
		if (list != null && !list.isEmpty()) {
			pageSize = pageSize > 0 ? pageSize : pageSize * -1;
			pageNo = pageNo > 0 ? pageNo : pageNo == 0 ? 1 : pageNo * -1;
			if (pageSize != 0) {
				int endIndex = pageNo * pageSize;
				int startIndex = endIndex - pageSize;
				endIndex = endIndex < list.size() ? endIndex : list.size();
				startIndex = startIndex < list.size() ? startIndex : 0;
				getAllFiltered = list.subList(startIndex, endIndex);
			}
		}
		return getAllFiltered;
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

	@Override
	public int getToalTestCodeCount() {
		return testCodeDao.totalTestCodesCount();
	}

	@Override
	public TestCode getTestCodeByCondition(String testName, String testCode) {
		return testCodeDao.findTestCodeByCondition(testCode, testCode);
	}

	

}
