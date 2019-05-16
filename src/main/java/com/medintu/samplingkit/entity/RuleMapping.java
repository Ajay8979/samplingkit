package com.medintu.samplingkit.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@javax.persistence.Entity
@Table(name = "rule_mapping")
public class RuleMapping implements Entity {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private Long id;
	@Column(name = "Sponsor_Id")
	private Long sponsorId;
	@Column(name = "Rule_Id")
	private Long ruleId;

	public RuleMapping() {
		// TODO Auto-generated constructor stub
	}

	public RuleMapping(Long id, Long sponsorId, Long ruleId) {
		super();
		this.id = id;
		this.sponsorId = sponsorId;
		this.ruleId = ruleId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getSponsorId() {
		return sponsorId;
	}

	public void setSponsorId(Long sponsorId) {
		this.sponsorId = sponsorId;
	}

	public Long getRuleId() {
		return ruleId;
	}

	public void setRuleId(Long ruleId) {
		this.ruleId = ruleId;
	}

}
