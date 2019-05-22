package com.medintu.samplingkit.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.json.simple.JSONObject;

@Entity
@Table(name = "end_user")
public class EndUser implements com.medintu.samplingkit.entity.Entity {

	@Id
	@GeneratedValue
	private Long id;

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

	private String orderCode;

	private Long sponsorId;

	private String status;

	@Column(name = "created_date")
	@Temporal(TemporalType.DATE)
	private Date createdDate;

	@Column(name = "updated_date")
	@Temporal(TemporalType.DATE)
	private Date updatedDate;

	public Long getSponsorId() {
		return sponsorId;
	}

	public void setSponsorId(Long sponsorId) {
		this.sponsorId = sponsorId;
	}

	public EndUser() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public String getOrderCode() {
		return orderCode;
	}

	public void setOrderCode(String orderCode) {
		this.orderCode = orderCode;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

}
