package com.medintu.samplingkit.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;

import com.medintu.samplingkit.entity.EthnicGroup;
import com.medintu.samplingkit.entity.Rule;
import com.medintu.samplingkit.entity.RuleMapper;
import com.medintu.samplingkit.entity.TestCode;

public class JpaRuleDao extends JpaDao<Rule, Long> implements RuleDao {

	public JpaRuleDao() {
		super(Rule.class);
	}

	@Override
	@Transactional
	public int updateRuleStatus(Long ruleId, String status) {
		Query query = getEntityManager()
				.createNativeQuery("Update rule_configuration set status='" + status + "' where rule_id =" + ruleId);
		return query.executeUpdate();
	}

	@Override
	@Transactional
	public void deleteEthnicGroupsBySponsorId(Long sponsorId) {
		getEntityManager().createNativeQuery("delete from rule_ethnicgroup  where rule_id=" + sponsorId)
				.executeUpdate();
	}

	@Override
	@Transactional
	public void deleteTestCodesBySponsorId(Long ruleId) {
		getEntityManager().createNativeQuery("delete from rule_testcode  where rule_id=" + ruleId).executeUpdate();
	}

	@Override
	public List<RuleMapper> getRulesBySponsorId(Integer sponsorId) {

		Query ruleQuery = getEntityManager()
				.createNativeQuery("select * from rule_configuration where sponsor_id=" + sponsorId, Rule.class);

		List<Rule> resultList = ruleQuery.getResultList();

		List<RuleMapper> ruleMappers = new ArrayList<RuleMapper>();

		for (Rule rule : resultList) {
			RuleMapper ruleMapper = new RuleMapper();
			BeanUtils.copyProperties(rule, ruleMapper);
			Query ethnicQuery = getEntityManager().createNativeQuery(
					"select e.ethnic_id,e.ethnic_name,e.ethnic_type from rule_ethnicgroup re,ethnic_group e where re.ethnic_id=e.ethnic_id and re.rule_id="
							+ rule.getId(),
					EthnicGroup.class);
			ruleMapper.setEthnicGroups(ethnicQuery.getResultList());
			Query testCodeQuery = getEntityManager().createNativeQuery(
					"select t.testcode_id,t.defaultTest,t.description,t.test_code,t.test_name from rule_testcode rt,test_code t where rt.testcode_id=t.testcode_id and rt.rule_id="
							+ rule.getId(),
					TestCode.class);
			ruleMapper.setTestCodes(testCodeQuery.getResultList());
			ruleMappers.add(ruleMapper);
		}
		return ruleMappers;

	}

}
