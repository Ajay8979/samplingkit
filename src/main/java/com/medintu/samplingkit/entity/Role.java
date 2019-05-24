package com.medintu.samplingkit.entity;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
	USER("1"), SUPERADMIN("0"), SUPPORTUSER("100"),SPONSORUSER("101"),ADMIN("94");
	private String authority;

	Role(String authority) {
		this.authority = authority;
	}

	@Override
	public String getAuthority() {
		return this.authority;
	}
}
