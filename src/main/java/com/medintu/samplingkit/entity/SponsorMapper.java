package com.medintu.samplingkit.entity;

import java.util.List;

public class SponsorMapper {

	private Long id;

	private String name;

	private Double budget;

	private String spentBudget;
	private List<SponsorAddress> addressList;

	private List<PostalCode> postalCodes;

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

	public Double getBudget() {
		return budget;
	}

	public void setBudget(Double budget) {
		this.budget = budget;
	}

	public List<SponsorAddress> getAddressList() {
		return addressList;
	}

	public void setAddressList(List<SponsorAddress> addressList) {
		this.addressList = addressList;
	}

	public List<PostalCode> getPostalCodes() {
		return postalCodes;
	}

	public void setPostalCodes(List<PostalCode> postalCodes) {
		this.postalCodes = postalCodes;
	}

	public String getSpentBudget() {
		return spentBudget;
	}

	public void setSpentBudget(String spentBudget) {
		this.spentBudget = spentBudget;
	}

}
