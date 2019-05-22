package com.medintu.samplingkit.entity;

import java.util.Date;

public class SponsorSpentBudgetMapper {

	private Long id;

	private Double budgetSpent;

	private String orderId;

	private Date txDate;

	private Long sponsorId;

	private String sponsorName;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getBudgetSpent() {
		return budgetSpent;
	}

	public void setBudgetSpent(Double budgetSpent) {
		this.budgetSpent = budgetSpent;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public Date getTxDate() {
		return txDate;
	}

	public void setTxDate(Date txDate) {
		this.txDate = txDate;
	}

	public Long getSponsorId() {
		return sponsorId;
	}

	public void setSponsorId(Long sponsorId) {
		this.sponsorId = sponsorId;
	}

	public String getSponsorName() {
		return sponsorName;
	}

	public void setSponsorName(String sponsorName) {
		this.sponsorName = sponsorName;
	}

}
