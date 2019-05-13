package com.medintu.samplingkit.service;

import java.util.List;

import com.medintu.samplingkit.entity.SpecialEvent;

public interface SpecialEventService {

	SpecialEvent addSpecialEvent(SpecialEvent specialEvent);
	
	void deleteSpecialEvent(Long id);
	
	SpecialEvent updateSpecialEvent(SpecialEvent specialEvent);
	
	List<SpecialEvent> getAllSpecialEvents();
	
	SpecialEvent getSpecialEventById(Long id);
}
