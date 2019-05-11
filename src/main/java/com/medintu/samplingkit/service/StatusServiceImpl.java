package com.medintu.samplingkit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.medintu.samplingkit.dao.StatusDao;
import com.medintu.samplingkit.entity.Status;

public class StatusServiceImpl implements StatusService{

	@Autowired
	private StatusDao statusDao;
	
	public StatusServiceImpl() {
	
	}

	public StatusServiceImpl(StatusDao statusDao) {
		super();
		this.statusDao = statusDao;
	}

	@Override
	public Status createStatus(Status status) {
		return statusDao.save(status);
	}

	@Override
	public List<Status> getAllStatus() {
		return statusDao.findAll();
	}

	@Override
	public Status updateStatus(Status status) {
		return statusDao.save(status);
	}

	@Override
	public void deleteStatus(Long id) {
		statusDao.delete(id);
	}

	@Override
	public Status findStatusById(Long id) {
		return statusDao.find(id);
	}

}
