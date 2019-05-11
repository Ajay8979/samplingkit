package com.medintu.samplingkit.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@javax.persistence.Entity
public class TestCodeSponserMapper implements Entity {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	private Long id;
	@Column(name = "SponsorID")
	private Long sponserId;
	@Column(name = "TestCode_Id")
	private Long testCodeId;
	@Column(name = "isDefaultTest")
	private boolean defaultTest;

	public TestCodeSponserMapper() {

	}

	public TestCodeSponserMapper(Long id, Long sponserId, Long testCodeId, boolean defaultTest) {
		this.id = id;
		this.sponserId = sponserId;
		this.testCodeId = testCodeId;
		this.defaultTest = defaultTest;
	}

	public boolean isDefaultTest() {
		return defaultTest;
	}

	public void setDefaultTest(boolean defaultTest) {
		this.defaultTest = defaultTest;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getSponserId() {
		return sponserId;
	}

	public void setSponserId(Long sponserId) {
		this.sponserId = sponserId;
	}

	public Long getTestCodeId() {
		return testCodeId;
	}

	public void setTestCodeId(Long testCodeId) {
		this.testCodeId = testCodeId;
	}

}
