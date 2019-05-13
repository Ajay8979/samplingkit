package com.medintu.samplingkit.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * @author ssagar {@code} Sponsor Contains BasicInfo,Rule &ContactInfo
 */
@Entity
@Table(name = "sponsor")
public class Sponsor implements com.medintu.samplingkit.entity.Entity {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(name = "Sponsor_Name")
	private String name;
	@Column(name = "Phone_Number", unique = true)
	private String phone;
	@Column(name = "Email_Address", unique = true)
	private String email;

	@Column(name = "budget")
	private String budget;

	@Column(name = "postal_code")
	private String postCode;

	private Integer postCodeMinValue;

	private Integer postCodeMaxValue;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "Sponsor_Id")
	private List<SponsorAddress> addressList;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "Sponsor_Id")
	private List<Rule> ruleList;
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "Sponsor_Id")
	private List<TestCode> testCodeList;

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

	public List<TestCode> getTestCodeList() {
		return testCodeList;
	}

	public void setTestCodeList(List<TestCode> testCodeList) {
		this.testCodeList = testCodeList;
	}

	public Sponsor() {
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

	public String getPostCode() {
		return postCode;
	}

	public void setPostCode(String postCode) {
		this.postCode = postCode;
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

	@Override
	public String toString() {
		return "Sponsor [id=" + id + ", name=" + name + ", phone=" + phone + ", email=" + email + ", budget=" + budget
				+ ", addressList=" + addressList + ", ruleList=" + ruleList + ", testCodeList=" + testCodeList + "]";
	}

	@Override
	public Long getId() {
		return id;
	}

}
