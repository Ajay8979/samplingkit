package com.medintu.samplingkit.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Test_Code")
public class TestCode implements com.medintu.samplingkit.entity.Entity {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="testcode_id")
	private Long id;
	@Column(unique = true, name = "test_name")
	private String testName;
	@Column
	private String description;
	@Column(unique = true, name = "test_code")
	private String testCode;
	@Column(name = "test_Price")
	private double testPrice;
	@Column
	private boolean isDefalut;
	private String status;
	@Column
	private Long sponsorId; 
	public boolean isDefalut() {
		return isDefalut;
	}

	public void setDefalut(boolean isDefalut) {
		this.isDefalut = isDefalut;
	}

	public TestCode() {

	}

	

	

	public Long getSponsorId() {
		return sponsorId;
	}

	public void setSponsorId(Long sponsorId) {
		this.sponsorId = sponsorId;
	}

	public TestCode(Long id, String testName, String description, String testCode, double testPrice) {
		super();
		this.id = id;
		this.testName = testName;
		this.description = description;
		this.testCode = testCode;
		this.testPrice = testPrice;
	}

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

	public double getTestPrice() {
		return testPrice;
	}

	public void setTestPrice(double testPrice) {
		this.testPrice = testPrice;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	

}
