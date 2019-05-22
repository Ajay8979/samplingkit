package com.medintu.samplingkit.entity;

import java.util.Date;
import java.util.Set;

import org.json.simple.JSONObject;

public class EndUserMapper {

	private Integer age;

	private String postCode;

	private String gender;

	private String oppositeGender;

	private Long ethnicGroupId;

	private JSONObject quetionary1;

	private JSONObject quetionary2;

	private JSONObject quetionary3;

	private JSONObject quetionary4;

	private Date dob;

	private String firstName;

	private String lastName;

	private String address;

	private String notificationPhone;

	private String notificationEmail;

	private Boolean lastResortLetter;

	private Set<TestCode> testCodes;

	private Long sponsorId;

	public EndUserMapper() {
		// TODO Auto-generated constructor stub
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getPostCode() {
		return postCode;
	}

	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getOppositeGender() {
		return oppositeGender;
	}

	public void setOppositeGender(String oppositeGender) {
		this.oppositeGender = oppositeGender;
	}

	public Long getEthnicGroupId() {
		return ethnicGroupId;
	}

	public void setEthnicGroupId(Long ethnicGroupId) {
		this.ethnicGroupId = ethnicGroupId;
	}

	public JSONObject getQuetionary1() {
		return quetionary1;
	}

	public void setQuetionary1(JSONObject quetionary1) {
		this.quetionary1 = quetionary1;
	}

	public JSONObject getQuetionary2() {
		return quetionary2;
	}

	public void setQuetionary2(JSONObject quetionary2) {
		this.quetionary2 = quetionary2;
	}

	public JSONObject getQuetionary3() {
		return quetionary3;
	}

	public void setQuetionary3(JSONObject quetionary3) {
		this.quetionary3 = quetionary3;
	}

	public JSONObject getQuetionary4() {
		return quetionary4;
	}

	public void setQuetionary4(JSONObject quetionary4) {
		this.quetionary4 = quetionary4;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getNotificationPhone() {
		return notificationPhone;
	}

	public void setNotificationPhone(String notificationPhone) {
		this.notificationPhone = notificationPhone;
	}

	public String getNotificationEmail() {
		return notificationEmail;
	}

	public void setNotificationEmail(String notificationEmail) {
		this.notificationEmail = notificationEmail;
	}

	public Boolean getLastResortLetter() {
		return lastResortLetter;
	}

	public void setLastResortLetter(Boolean lastResortLetter) {
		this.lastResortLetter = lastResortLetter;
	}

	public Long getSponsorId() {
		return sponsorId;
	}

	public void setSponsorId(Long sponsorId) {
		this.sponsorId = sponsorId;
	}

	public Set<TestCode> getTestCodes() {
		return testCodes;
	}

	public void setTestCodes(Set<TestCode> testCodes) {
		this.testCodes = testCodes;
	}

}
