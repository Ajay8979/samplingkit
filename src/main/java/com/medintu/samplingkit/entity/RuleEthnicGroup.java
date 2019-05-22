package com.medintu.samplingkit.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "rule_ethnicgroup")
public class RuleEthnicGroup implements com.medintu.samplingkit.entity.Entity {

	@Id
	@GeneratedValue
	@Column(name = "rule_ethnicgroup_id")
	private Long id;

	@Column(name = "rule_id")
	private Long ruleId;

	@Column(name = "ethnic_id")
	private Long ethnicId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getRuleId() {
		return ruleId;
	}

	public void setRuleId(Long ruleId) {
		this.ruleId = ruleId;
	}

	public Long getEthnicId() {
		return ethnicId;
	}

	public void setEthnicId(Long ethnicId) {
		this.ethnicId = ethnicId;
	}

}
