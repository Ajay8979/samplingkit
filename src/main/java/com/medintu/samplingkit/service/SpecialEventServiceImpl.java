package com.medintu.samplingkit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.medintu.samplingkit.dao.SpecialEventDao;
import com.medintu.samplingkit.entity.SpecialEvent;

public class SpecialEventServiceImpl implements SpecialEventService{

	@Autowired
	private SpecialEventDao specialEventDao;
	
	@Override
	public SpecialEvent addSpecialEvent(SpecialEvent specialEvent) {
		return specialEventDao.save(specialEvent);
	}

	@Override
	public void deleteSpecialEvent(Long id) {
		specialEventDao.delete(id);
		
	}

	@Override
	public SpecialEvent updateSpecialEvent(SpecialEvent specialEvent) {
		return specialEventDao.save(specialEvent);
	}

	@Override
	public List<SpecialEvent> getAllSpecialEvents() {
		return specialEventDao.findAll();
	}

	@Override
	public SpecialEvent getSpecialEventById(Long id) {
		return specialEventDao.find(id);
	}

	
}
