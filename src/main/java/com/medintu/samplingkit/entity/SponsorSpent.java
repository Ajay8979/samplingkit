package com.medintu.samplingkit.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@javax.persistence.Entity
@Table(name = "sponsor_spent")
public class SponsorSpent implements Entity {

	@Id
	@GeneratedValue
	private Long id;

	@Column(name = "budget_spent")
	private Double budgetSpent;

	@Column(name = "order_id")
	private String orderId;

	@Column(name = "tx_date")
	private Date txDate;

	@Column(name = "sponsor_id")
	private Long sponsorId;

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

	public void setId(Long id) {
		this.id = id;
	}

	public Long getSponsorId() {
		return sponsorId;
	}

	public void setSponsorId(Long sponsorId) {
		this.sponsorId = sponsorId;
	}

	@Override
	public Long getId() {
		// TODO Auto-generated method stub
		return null;
	}

}
