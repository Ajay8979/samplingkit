package com.medintu.samplingkit.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedNativeQueries;
import javax.persistence.NamedNativeQuery;
import javax.persistence.Table;

@javax.persistence.Entity
@Table(name = "sponsor_postlcode")
public class SponsorPostlcode implements Entity {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "sponsor_postlcode_id")
	private Long id;

	private Long postal_id;

	private Long sponsor_id;
	
	

	public SponsorPostlcode() {
		// TODO Auto-generated constructor stub
	}

	

	public Long getPostal_id() {
		return postal_id;
	}



	public void setPostal_id(Long postal_id) {
		this.postal_id = postal_id;
	}



	public Long getSponsor_id() {
		return sponsor_id;
	}



	public void setSponsor_id(Long sponsor_id) {
		this.sponsor_id = sponsor_id;
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
