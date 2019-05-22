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

	@Column(name = "budget")
	private Double budget;

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

	public Double getBudget() {
		return budget;
	}

	public void setBudget(Double budget) {
		this.budget = budget;
	}

	@Override
	public String toString() {
		return "Sponsor [id=" + id + ", name=" + name + ", budget=" + budget + "]";
	}

	@Override
	public Long getId() {
		return id;
	}

}
