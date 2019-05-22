package com.medintu.samplingkit.entity;

import java.util.Date;

public class RuleDetailsMapper {

	private Long id;

	private Long sponsor_id;

	private String gender;

	private Long ethnicGroupId;

	private Date startDate;

	private Date endDate;

	private Long tectCodeId;

	private Long minAgeGroup;

	private Long maxAgeGroup;

	private String status;

	private String ethnicName;

	private String ethnicType;

	private String testName;

	private String description;

	private String testCode;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getSponsor_id() {
		return sponsor_id;
	}

	public void setSponsor_id(Long sponsor_id) {
		this.sponsor_id = sponsor_id;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Long getEthnicGroupId() {
		return ethnicGroupId;
	}

	public void setEthnicGroupId(Long ethnicGroupId) {
		this.ethnicGroupId = ethnicGroupId;
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

	public Long getTectCodeId() {
		return tectCodeId;
	}

	public void setTectCodeId(Long tectCodeId) {
		this.tectCodeId = tectCodeId;
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getEthnicName() {
		return ethnicName;
	}

	public void setEthnicName(String ethnicName) {
		this.ethnicName = ethnicName;
	}

	public String getEthnicType() {
		return ethnicType;
	}

	public void setEthnicType(String ethnicType) {
		this.ethnicType = ethnicType;
	}

	public String getTestName() {
		return testName;
	}

	public void setTestName(String testName) {
		this.testName = testName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTestCode() {
		return testCode;
	}

	public void setTestCode(String testCode) {
		this.testCode = testCode;
	}

}
