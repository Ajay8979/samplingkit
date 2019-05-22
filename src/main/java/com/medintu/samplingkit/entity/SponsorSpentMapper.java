package com.medintu.samplingkit.entity;

public class SponsorSpentMapper {

	private Long sponsorId;

	private Double sponsorBudget;

	private Double sponsorSpent;

	private Double remainingAmount;

	private String sponsorName;

	public Long getSponsorId() {
		return sponsorId;
	}

	public void setSponsorId(Long sponsorId) {
		this.sponsorId = sponsorId;
	}

	public Double getSponsorBudget() {
		return sponsorBudget;
	}

	public void setSponsorBudget(Double sponsorBudget) {
		this.sponsorBudget = sponsorBudget;
	}

	public Double getSponsorSpent() {
		return sponsorSpent;
	}

	public void setSponsorSpent(Double sponsorSpent) {
		this.sponsorSpent = sponsorSpent;
	}

	public Double getRemainingAmount() {
		return remainingAmount;
	}

	public void setRemainingAmount(Double remainingAmount) {
		this.remainingAmount = remainingAmount;
	}

	public String getSponsorName() {
		return sponsorName;
	}

	public void setSponsorName(String sponsorName) {
		this.sponsorName = sponsorName;
	}

}
