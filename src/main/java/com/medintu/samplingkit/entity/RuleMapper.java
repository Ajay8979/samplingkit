package com.medintu.samplingkit.entity;

import java.util.Date;
import java.util.List;

public class RuleMapper {

	private Long id;

	private String gender;

	private Date startDate;

	private Date endDate;

	private Long minAgeGroup;

	private Long maxAgeGroup;

	private Long sponsor_id;

	private String status;

	private List<EthnicGroup> ethnicGroups;

	private List<TestCode> testCodes;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Long getMinAgeGroup() {
		return minAgeGroup;
	}

	public void setMinAgeGroup(Long minAgeGroup) {
		this.minAgeGroup = minAgeGroup;
	}

	public Long getMaxAgeGroup() {
		return maxAgeGroup;
	}

	public void setMaxAgeGroup(Long maxAgeGroup) {
		this.maxAgeGroup = maxAgeGroup;
	}

	public Long getSponsor_id() {
		return sponsor_id;
	}

	public void setSponsor_id(Long sponsor_id) {
		this.sponsor_id = sponsor_id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<EthnicGroup> getEthnicGroups() {
		return ethnicGroups;
	}

	public void setEthnicGroups(List<EthnicGroup> ethnicGroups) {
		this.ethnicGroups = ethnicGroups;
	}

	public List<TestCode> getTestCodes() {
		return testCodes;
	}

	public void setTestCodes(List<TestCode> testCodes) {
		this.testCodes = testCodes;
	}

}
