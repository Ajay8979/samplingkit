package com.medintu.samplingkit.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@javax.persistence.Entity
@Table(name = "Service_Address")
public class ServiceAddress implements Entity {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private Long id;
	private String streetNumber;
	private String streetName1;
	private String streetName2;
	private String suit;
	private String city;
	private String country;
	private String district;
	private String region;
	@Column(name = "Address_Type")
	private String addressType;
	private String state;
	private Number zipcode;
	@Column(name = "Service_User_Id")
	private Long serviceUserId;

	public ServiceAddress() {

	}

	public ServiceAddress(Long id, String streetNumber, String streetName1, String streetName2, String suit,
			String city, String country, String district, String region, String addressType, String state,
			Number zipcode, Long serviceUserId) {
		this.id = id;
		this.streetNumber = streetNumber;
		this.streetName1 = streetName1;
		this.streetName2 = streetName2;
		this.suit = suit;
		this.city = city;
		this.country = country;
		this.district = district;
		this.region = region;
		this.addressType = addressType;
		this.state = state;
		this.zipcode = zipcode;
		this.serviceUserId = serviceUserId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStreetNumber() {
		return streetNumber;
	}

	public void setStreetNumber(String streetNumber) {
		this.streetNumber = streetNumber;
	}

	public String getStreetName1() {
		return streetName1;
	}

	public void setStreetName1(String streetName1) {
		this.streetName1 = streetName1;
	}

	public String getStreetName2() {
		return streetName2;
	}

	public void setStreetName2(String streetName2) {
		this.streetName2 = streetName2;
	}

	public String getSuit() {
		return suit;
	}

	public void setSuit(String suit) {
		this.suit = suit;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getAddressType() {
		return addressType;
	}

	public void setAddressType(String addressType) {
		this.addressType = addressType;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Number getZipcode() {
		return zipcode;
	}

	public void setZipcode(Number zipcode) {
		this.zipcode = zipcode;
	}

	public Long getServiceUserId() {
		return serviceUserId;
	}

	public void setServiceUserId(Long serviceUserId) {
		this.serviceUserId = serviceUserId;
	}

}
