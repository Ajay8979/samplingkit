package com.medintu.samplingkit.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "rule_configuration")
@javax.persistence.Entity
public class Rule implements Entity {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "rule_id")
	private Long id;

	private Long sponsor_id;

	private String gender;

	private Date startDate;

	private Date endDate;

	@Column(name = "min_age_group")
	private Long minAgeGroup;
	@Column(name = "max_age_group")
	private Long maxAgeGroup;

	private String status;

	public Long getSponsor_id() {
		return sponsor_id;
	}

	public void setSponsor_id(Long sponsor_id) {
		this.sponsor_id = sponsor_id;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Long getMinAgeGroup() {
		return minAgeGroup;
	}

	public void setMinAgeGroup(Long minAgeGroup) {
		this.minAgeGroup = minAgeGroup;
	}

	public Long getMaxAgeGroup() {
		return maxAgeGroup;
	}

	public void setMaxAgeGroup(Long maxAgeGroup) {
		this.maxAgeGroup = maxAgeGroup;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public Long getId() {
		return id;
	}

}
