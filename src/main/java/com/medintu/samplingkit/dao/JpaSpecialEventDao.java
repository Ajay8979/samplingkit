package com.medintu.samplingkit.dao;

import com.medintu.samplingkit.entity.SpecialEvent;

public class JpaSpecialEventDao extends JpaDao<SpecialEvent, Long> implements SpecialEventDao{

	public JpaSpecialEventDao() {
		super(SpecialEvent.class);
	}

}
