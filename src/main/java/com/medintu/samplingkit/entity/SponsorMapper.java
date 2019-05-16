package com.medintu.samplingkit.entity;

import java.util.List;

public class SponsorMapper {

	private Long id;

	private String name;

	private String phone;

	private String email;
	private String budget;
	private List<SponsorAddress> addressList;
	private List<Rule> ruleList;

	private List<PostalCode> postalCodes;

	private Integer postCodeMinValue;

	private Integer postCodeMaxValue;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBudget() {
		return budget;
	}

	public void setBudget(String budget) {
		this.budget = budget;
	}

	public List<SponsorAddress> getAddressList() {
		return addressList;
	}

	public void setAddressList(List<SponsorAddress> addressList) {
		this.addressList = addressList;
	}

	public List<Rule> getRuleList() {
		return ruleList;
	}

	public void setRuleList(List<Rule> ruleList) {
		this.ruleList = ruleList;
	}

	public Integer getPostCodeMinValue() {
		return postCodeMinValue;
	}

	public void setPostCodeMinValue(Integer postCodeMinValue) {
		this.postCodeMinValue = postCodeMinValue;
	}

	public Integer getPostCodeMaxValue() {
		return postCodeMaxValue;
	}

	public void setPostCodeMaxValue(Integer postCodeMaxValue) {
		this.postCodeMaxValue = postCodeMaxValue;
	}


	public List<PostalCode> getPostalCodes() {
		return postalCodes;
	}

	public void setPostalCodes(List<PostalCode> postalCodes) {
		this.postalCodes = postalCodes;
	}

}
