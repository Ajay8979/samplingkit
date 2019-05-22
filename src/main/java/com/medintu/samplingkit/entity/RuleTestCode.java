package com.medintu.samplingkit.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "rule_testcode")
public class RuleTestCode implements com.medintu.samplingkit.entity.Entity {

	@Id
	@GeneratedValue
	@Column(name = "rule_testcode_id")
	private Long id;

	@Column(name = "rule_id")
	private Long ruleId;

	@Column(name = "testcode_id")
	private Long testcodeId;

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

	public Long getTestcodeId() {
		return testcodeId;
	}

	public void setTestcodeId(Long testcodeId) {
		this.testcodeId = testcodeId;
	}

}
