package com.medintu.samplingkit.service;

import java.util.List;

import com.medintu.samplingkit.entity.EthnicGroup;

public interface EthnicGroupService {
	
	
	public EthnicGroup createEthnicGroup(EthnicGroup eg);
	
    public void deleteEthnicGroupById(Long ethnicGroupId);
    
	
	public EthnicGroup updateEthnicGroupById(EthnicGroup ethnicgroup);
	
	public EthnicGroup getEthnicGroupById(Long ethnicGroupId);
	 
	public List<EthnicGroup> getAllEthnicGroups();
	
	
	public List<String> getEthnicByGroup();
	
	
	
	
	
	
}
