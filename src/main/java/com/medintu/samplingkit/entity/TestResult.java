package com.medintu.samplingkit.entity;

import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@javax.persistence.Entity
@Table(name = "test_result")
public class TestResult implements Entity {
	@Id
	@GeneratedValue
	private Long id;
	private String orderId;
	private String ethinicGroups;
	private String gender;
	private String phoneNumber;
	private String mail;
	private String patientName;
	private String testResult;
	private String testCode;
	private String testName;
	private Date testResultDate;
	private String sponserId;
	private String orderDate;

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	private String STATUS;

	public String getEthinicGroups() {
		return ethinicGroups;
	}

	public void setEthinicGroups(String ethinicGroups) {
		this.ethinicGroups = ethinicGroups;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getTestResult() {
		return testResult;
	}

	public void setTestResult(String testResult) {
		this.testResult = testResult;
	}

	public String getTestCode() {
		return testCode;
	}

	public void setTestCode(String testCode) {
		this.testCode = testCode;
	}

	public String getTestName() {
		return testName;
	}

	public void setTestName(String testName) {
		this.testName = testName;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getSTATUS() {
		return STATUS;
	}

	public void setSTATUS(String sTATUS) {
		STATUS = sTATUS;
	}

	@Override
	public Long getId() {
		// TODO Auto-generated method stub
		return null;
	}

}
