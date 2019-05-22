package com.medintu.samplingkit.entity;

import java.util.List;

public class SponsorWithPostalMapper {
	private Long id;
	private String name;

	private Double budget;

	private List<PostalCode> postalCodes;

	public List<PostalCode> getPostalCodes() {
		return postalCodes;
	}

	public void setPostalCodes(List<PostalCode> postalCodes) {
		this.postalCodes = postalCodes;
	}

	public SponsorWithPostalMapper() {
		// TODO Auto-generated constructor stub
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

	@Override
	public String toString() {
		return "SponsorWithPostalMapper [id=" + id + ", name=" + name + ", budget=" + budget + ", postalCodes="
				+ postalCodes + "]";
	}

	public Long getId() {
		return id;
	}

}
