package com.medintu.samplingkit.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@javax.persistence.Entity
@Table(name = "Status")
public class Status implements Entity {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private Long id;
	@Column(unique = true)
	private String nameOfTheStatus;

	public Status() {

	}

	public Status(Long id, String nameOfTheStatus) {
		super();
		this.id = id;
		this.nameOfTheStatus = nameOfTheStatus;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNameOfTheStatus() {
		return nameOfTheStatus;
	}

	public void setNameOfTheStatus(String nameOfTheStatus) {
		this.nameOfTheStatus = nameOfTheStatus;
	}

}
