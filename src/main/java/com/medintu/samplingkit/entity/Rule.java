package com.medintu.samplingkit.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "Rule_Configuration")
@javax.persistence.Entity
public class Rule implements Entity {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	@Column(name = "rule_id")
	private Long id;
	@Column(name = "rule_name")
	private String ruleName;
	@Column(name = "rule_value")
	private String ruleValue;

	public Rule() {

	}

	public Rule(Long id, String ruleName, String ruleValue) {
		this.id = id;
		this.ruleName = ruleName;
		this.ruleValue = ruleValue;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRuleName() {
		return ruleName;
	}

	public void setRuleName(String ruleName) {
		this.ruleName = ruleName;
	}

	public String getRuleValue() {
		return ruleValue;
	}

	public void setRuleValue(String ruleValue) {
		this.ruleValue = ruleValue;
	}

}
