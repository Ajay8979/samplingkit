package com.medintu.samplingkit.entity;

import java.util.List;

public class SponsorWithPostalMapper   {
	private Long id;
	private String name;
	private String phone;
	private String email;

	private String budget;
	
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

	

	@Override
	public String toString() {
		return "Sponsor [id=" + id + ", name=" + name + ", phone=" + phone + ", email=" + email + ", budget=" + budget
				+ "]";
	}

	public Long getId() {
		return id;
	}

	

}
