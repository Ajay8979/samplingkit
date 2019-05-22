package com.medintu.samplingkit.entity;

public class TestMapper {

	private Long id;

	private String testName;

	private String description;

	private String testCode;

	private Boolean isDefaultTest;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public Boolean getIsDefaultTest() {
		return isDefaultTest;
	}

	public void setIsDefaultTest(Boolean isDefaultTest) {
		this.isDefaultTest = isDefaultTest;
	}

}
