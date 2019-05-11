package com.medintu.samplingkit.service;

import java.util.List;

import com.medintu.samplingkit.entity.Status;

public interface StatusService {

	public Status createStatus(Status status);
	
	public List<Status> getAllStatus();
	
	public Status findStatusById(Long id);
	
	public Status updateStatus(Status status);
	
	public void deleteStatus(Long id);
}
