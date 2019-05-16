package com.medintu.samplingkit.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
	@Column(name = "sponsor_name")
	private String name;
	@Column(name = "phone_number", unique = true)
	private String phone;
	@Column(name = "email_address", unique = true)
	private String email;

	@Column(name = "budget")
	private String budget;

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

	

	@Override
	public String toString() {
		return "Sponsor [id=" + id + ", name=" + name + ", phone=" + phone + ", email=" + email + ", budget=" + budget
				+ "]";
	}

	@Override
	public Long getId() {
		return id;
	}

}
