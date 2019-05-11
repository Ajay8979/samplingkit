package com.medintu.samplingkit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.medintu.samplingkit.dao.EthnicGroupDao;
import com.medintu.samplingkit.entity.EthnicGroup;

//@Service
@Transactional
public class EthnicGroupServiceImpl implements EthnicGroupService {

	@Autowired
	private EthnicGroupDao ethnicGroupdao;

	@Override
	public EthnicGroup createEthnicGroup(EthnicGroup ethnicGroup) {
		return ethnicGroupdao.save(ethnicGroup);
	}

	@Override
	public EthnicGroup getEthnicGroupById(Long ethnicGroupId) {
		return ethnicGroupdao.find(ethnicGroupId);
	}

	@Override
	public List<EthnicGroup> getAllEthnicGroups() {
		return ethnicGroupdao.findAll();
	}

	@Override
	public void deleteEthnicGroupById(Long id) {
		ethnicGroupdao.delete(id);
	}

	@Override
	public EthnicGroup updateEthnicGroupById(EthnicGroup ethnicgroup) {
		return ethnicGroupdao.save(ethnicgroup);

	}

}
