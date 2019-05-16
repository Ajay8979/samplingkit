package com.medintu.samplingkit.service;

import java.util.List;

import com.medintu.samplingkit.entity.PostalCode;

public interface PostalCodeService {
	
	public PostalCode createPostalCode(PostalCode postalCode);
	
	public PostalCode UpadtePostalCode(PostalCode postalCode);
	
	public void deletePostalCode(Long id);
	
	public List<PostalCode> getAllPostalCodes();

}
