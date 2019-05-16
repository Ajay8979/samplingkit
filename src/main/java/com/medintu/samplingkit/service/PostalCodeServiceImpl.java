package com.medintu.samplingkit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.medintu.samplingkit.dao.PostalCodeDao;
import com.medintu.samplingkit.entity.PostalCode;

public class PostalCodeServiceImpl implements PostalCodeService{

	@Autowired
	private PostalCodeDao postalCodeDao;
	
	@Override
	public PostalCode createPostalCode(PostalCode postalCode) {
		return postalCodeDao.save(postalCode);
	}

	@Override
	public PostalCode UpadtePostalCode(PostalCode postalCode) {
		return postalCodeDao.save(postalCode);
	}

	@Override
	public void deletePostalCode(Long id) {
		postalCodeDao.delete(id);
	}

	@Override
	public List<PostalCode> getAllPostalCodes() {
		return postalCodeDao.findAll();
	}

}
