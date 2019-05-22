package com.medintu.samplingkit.dao;

import java.util.List;

import com.medintu.samplingkit.entity.SponsorSpent;
import com.medintu.samplingkit.entity.SponsorSpentBudgetMapper;
import com.medintu.samplingkit.entity.SponsorSpentMapper;

public interface SponsorSpentDao extends Dao<SponsorSpent, Long> {

	List<SponsorSpentBudgetMapper> getSponsorSpents(Long sponsorId);

	List<SponsorSpentMapper> getSponsorBudgetDetails(Long sponsorId);
}
