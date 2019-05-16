package com.medintu.samplingkit.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "end_user_tests")
public class EndUserTests implements com.medintu.samplingkit.entity.Entity {

	@Id
	@GeneratedValue
	private Long id;

	private Long test_id;

	private Long enduser_id;

	public Long getTest_id() {
		return test_id;
	}

	public void setTest_id(Long test_id) {
		this.test_id = test_id;
	}

	public Long getEnduser_id() {
		return enduser_id;
	}

	public void setEnduser_id(Long enduser_id) {
		this.enduser_id = enduser_id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public Long getId() {
		// TODO Auto-generated method stub
		return this.id;
	}

}
