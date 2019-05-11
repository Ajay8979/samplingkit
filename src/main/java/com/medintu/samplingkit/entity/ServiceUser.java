package com.medintu.samplingkit.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@javax.persistence.Entity
@Table(name = "Service_User")
public class ServiceUser implements Entity {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private Long id;
	@Column(name = "Service_User_Name")
	private String serviceUserName;
	@Column(name = "Accesstoken")
	private String accessToken;
	private String emailId;
	private String region;

	public ServiceUser() {
		// TODO Auto-generated constructor stub
	}

	public ServiceUser(Long id, String serviceUserName, String accessToken, String emailId, String region) {
		this.id = id;
		this.serviceUserName = serviceUserName;
		this.accessToken = accessToken;
		this.emailId = emailId;
		this.region = region;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getServiceUserName() {
		return serviceUserName;
	}

	public void setServiceUserName(String serviceUserName) {
		this.serviceUserName = serviceUserName;
	}

	public String getAccessToken() {
		return accessToken;
	}

	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

}
