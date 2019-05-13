package com.medintu.samplingkit.entity;

import java.util.List;

public class EthnicGroupResponse {

	private String ethnicGroupName;

	private List<EthnicGroup> ethnicGroups;

	public EthnicGroupResponse() {
		// TODO Auto-generated constructor stub
	}

	public String getEthnicGroupName() {
		return ethnicGroupName;
	}

	public void setEthnicGroupName(String ethnicGroupName) {
		this.ethnicGroupName = ethnicGroupName;
	}

	public List<EthnicGroup> getEthnicGroups() {
		return ethnicGroups;
	}

	public void setEthnicGroups(List<EthnicGroup> ethnicGroups) {
		this.ethnicGroups = ethnicGroups;
	}

}
