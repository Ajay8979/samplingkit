package com.medintu.samplingkit.entity;

public class DashboardSponsor {

	private Integer orderplaced;
	private Integer orderDispatched;
	private Integer resultReactive;
	private Integer resultNonReactive;
	private Double sponsorBudgetSpent;
	private Double sponsorBudgetRemaining;

	public Integer getOrderplaced() {
		return orderplaced;
	}

	public void setOrderplaced(Integer orderplaced) {
		this.orderplaced = orderplaced;
	}

	public Integer getOrderDispatched() {
		return orderDispatched;
	}

	public void setOrderDispatched(Integer orderDispatched) {
		this.orderDispatched = orderDispatched;
	}

	public Integer getResultReactive() {
		return resultReactive;
	}

	public void setResultReactive(Integer resultReactive) {
		this.resultReactive = resultReactive;
	}

	public Integer getResultNonReactive() {
		return resultNonReactive;
	}

	public void setResultNonReactive(Integer resultNonReactive) {
		this.resultNonReactive = resultNonReactive;
	}

	public Double getSponsorBudgetSpent() {
		return sponsorBudgetSpent;
	}

	public void setSponsorBudgetSpent(Double sponsorBudgetSpent) {
		this.sponsorBudgetSpent = sponsorBudgetSpent;
	}

	public Double getSponsorBudgetRemaining() {
		return sponsorBudgetRemaining;
	}

	public void setSponsorBudgetRemaining(Double sponsorBudgetRemaining) {
		this.sponsorBudgetRemaining = sponsorBudgetRemaining;
	}
}
