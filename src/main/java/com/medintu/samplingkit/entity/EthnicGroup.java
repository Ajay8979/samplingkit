package com.medintu.samplingkit.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ethnic_group")
public class EthnicGroup implements com.medintu.samplingkit.entity.Entity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ethnic_id")
	private Long ethnicId;

	@Column(name = "ethnic_name")
	private String ethnicName;
	@Column(name = "ethnic_type", unique = true)
	private String ethnicType;

	public EthnicGroup() {
		super();
	}

	public Long getEthnicId() {
		return ethnicId;
	}

	public void setEthnicId(Long ethnicId) {
		this.ethnicId = ethnicId;
	}

	public String getEthnicName() {
		return ethnicName;
	}

	public void setEthnicName(String ethnicName) {
		this.ethnicName = ethnicName;
	}

	public String getEthnicType() {
		return ethnicType;
	}

	public void setEthnicType(String ethnicType) {
		this.ethnicType = ethnicType;
	}

	@Override
	public Long getId() {
		return ethnicId;
	}

}
