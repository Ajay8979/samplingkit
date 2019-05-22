package com.medintu.samplingkit.dao;

import java.util.List;

import com.medintu.samplingkit.entity.Rule;
import com.medintu.samplingkit.entity.RuleMapper;

public interface RuleDao extends Dao<Rule, Long> {

	int updateRuleStatus(Long ruleId, String status);

	void deleteEthnicGroupsBySponsorId(Long ruleId);

	void deleteTestCodesBySponsorId(Long ruleId);

	List<RuleMapper> getRulesBySponsorId(Integer sponsorId);

}
