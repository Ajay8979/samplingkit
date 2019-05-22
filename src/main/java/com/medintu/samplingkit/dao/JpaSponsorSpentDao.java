package com.medintu.samplingkit.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Query;

import org.springframework.util.CollectionUtils;

import com.medintu.samplingkit.entity.SponsorSpent;
import com.medintu.samplingkit.entity.SponsorSpentBudgetMapper;
import com.medintu.samplingkit.entity.SponsorSpentMapper;

public class JpaSponsorSpentDao extends JpaDao<SponsorSpent, Long> implements SponsorSpentDao {

	public JpaSponsorSpentDao() {
		super(SponsorSpent.class);
	}

	@Override
	public List<SponsorSpentBudgetMapper> getSponsorSpents(Long sponsorId) {
		Query query = getEntityManager().createNativeQuery(
				"select ss.sponsor_id,ss.order_id,ss.budget_spent,ss.tx_date,s.sponsor_name from sponsor s,sponsor_spent ss where s.id=ss.sponsor_id  and ss.sponsor_id="
						+ sponsorId);

		List<Object[]> resultList = query.getResultList();

		List<SponsorSpentBudgetMapper> sponsorSpentBudgetMappers = new ArrayList<SponsorSpentBudgetMapper>();
		if (!CollectionUtils.isEmpty(resultList)) {
			for (Object[] objects : resultList) {
				SponsorSpentBudgetMapper sponsorSpentMapper = new SponsorSpentBudgetMapper();
				sponsorSpentMapper.setSponsorId(sponsorId);
				sponsorSpentMapper.setOrderId(objects[1] + "");
				sponsorSpentMapper.setBudgetSpent(Double.parseDouble(objects[2] + ""));
				sponsorSpentMapper.setTxDate((Date) objects[3]);
				sponsorSpentMapper.setSponsorName(objects[4] + "");
				sponsorSpentBudgetMappers.add(sponsorSpentMapper);

			}
		}
		return sponsorSpentBudgetMappers;
	}

	@Override
	public List<SponsorSpentMapper> getSponsorBudgetDetails(Long sponsorId) {

		List<SponsorSpentMapper> sponsorSpentMappers = new ArrayList<SponsorSpentMapper>();

		if (null != sponsorId) {
			Query query = getEntityManager().createNativeQuery(
					"select ss.sponsor_id,sum(ss.budget_spent),s.budget,s.sponsor_name from sponsor s,sponsor_spent ss where s.id=ss.sponsor_id  and ss.sponsor_id="
							+ sponsorId + " Group By ss.sponsor_id");
			List<Object[]> resultList = query.getResultList();

			if (!CollectionUtils.isEmpty(resultList)) {
				for (Object[] objects : resultList) {
					SponsorSpentMapper sponsorSpentMapper = new SponsorSpentMapper();
					sponsorSpentMapper.setSponsorId(sponsorId);
					sponsorSpentMapper.setSponsorBudget(Double.parseDouble(objects[2] + ""));
					sponsorSpentMapper.setSponsorSpent(Double.parseDouble(objects[1] + ""));
					sponsorSpentMapper.setRemainingAmount(
							Double.parseDouble(objects[2] + "") - Double.parseDouble(objects[1] + ""));
					sponsorSpentMapper.setSponsorName(objects[3] + "");
					sponsorSpentMappers.add(sponsorSpentMapper);

				}
			}

		} else {
			Query query = getEntityManager().createNativeQuery(
					"select ss.sponsor_id,sum(ss.budgetSpent),s.budget,s.sponsor_name from sponsor s,sponsor_spent where s.id=ss.sponsor_id Group By ss.sponsor_id");
			List<Object[]> resultList = query.getResultList();

			if (!CollectionUtils.isEmpty(resultList)) {
				for (Object[] objects : resultList) {
					SponsorSpentMapper sponsorSpentMapper = new SponsorSpentMapper();
					sponsorSpentMapper.setSponsorId(sponsorId);
					sponsorSpentMapper.setSponsorBudget(Double.parseDouble(objects[2] + ""));
					sponsorSpentMapper.setSponsorSpent(Double.parseDouble(objects[1] + ""));
					sponsorSpentMapper.setRemainingAmount(
							Double.parseDouble(objects[2] + "") - Double.parseDouble(objects[1] + ""));
					sponsorSpentMapper.setSponsorName(objects[3] + "");
					sponsorSpentMappers.add(sponsorSpentMapper);

				}
			}
		}
		return sponsorSpentMappers;

	}

}
