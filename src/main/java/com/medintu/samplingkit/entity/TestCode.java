package com.medintu.samplingkit.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "test_code")
public class TestCode implements com.medintu.samplingkit.entity.Entity {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "testcode_id")
	private Long id;

	@Column(name = "test_name")
	private String testName;

	private String description;

	@Column(name = "test_code")
	private String testCode;

	@Column(name = "is_default")
	private Boolean isDefalut;

	private String status;

	public TestCode() {

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

	public Boolean getIsDefalut() {
		return isDefalut;
	}

	public void setIsDefalut(Boolean isDefalut) {
		this.isDefalut = isDefalut;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public Long getId() {
		// TODO Auto-generated method stub
		return id;
	}

}
