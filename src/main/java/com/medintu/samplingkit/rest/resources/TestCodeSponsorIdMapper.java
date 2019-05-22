package com.medintu.samplingkit.rest.resources;

import java.util.List;

import com.medintu.samplingkit.entity.TestCode;

public class TestCodeSponsorIdMapper {

	private List<TestCode> testCodes;

	private Long sponsorId;

	public List<TestCode> getTestCodes() {
		return testCodes;
	}

	public void setTestCodes(List<TestCode> testCodes) {
		this.testCodes = testCodes;
	}

	public Long getSponsorId() {
		return sponsorId;
	}

	public void setSponsorId(Long sponsorId) {
		this.sponsorId = sponsorId;
	}

}
