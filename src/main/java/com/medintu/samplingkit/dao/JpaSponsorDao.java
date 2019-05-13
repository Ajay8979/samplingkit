package com.medintu.samplingkit.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.util.CollectionUtils;

import com.medintu.samplingkit.entity.Rule;
import com.medintu.samplingkit.entity.Sponsor;
import com.medintu.samplingkit.entity.SponsorAddress;
import com.medintu.samplingkit.entity.TestCode;

public class JpaSponsorDao extends JpaDao<Sponsor, Long> implements SponsorDao {

	private EntityManager entityManager;

	public JpaSponsorDao() {
		super(Sponsor.class);

	}

	public EntityManager getEntityManager() {
		return this.entityManager;
	}

	@PersistenceContext
	public void setEntityManager(final EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public Boolean getSponsorsByPostCode(Integer age, String postCode) {

		String subPostCode = postCode.substring(0, 3);

		Query query = this.entityManager
				.createNativeQuery("SELECT * FROM Sponsor s WHERE s.postal_code LIKE '" + subPostCode + "%'");
		List<Object[]> resultList = query.getResultList();

		if (!CollectionUtils.isEmpty(resultList) && resultList.size() > 0) {
			return true;
		}
		return false;
	}

	@Override
	public Long getSponsorsByPostCode(String postCode, String gender, Long ethnicGroupId, Integer age) {

		String subPostCode = postCode.substring(0, 3);

		Query query = this.getEntityManager().createNativeQuery(
				"SELECT  rule_name,rule_value,Sponsor_Id  FROM rule_configuration r ,Sponsor s WHERE s.id=r.Sponsor_Id AND s.postal_code LIKE '"
						+ subPostCode + "%' and r.ethnic_groupid=" + ethnicGroupId);
		List<Object[]> resultList = query.getResultList();
		boolean b = false;
		boolean ageb = false;

		int mage = 0;
		int mxage = 0;
		Long sponserId = null;
		for (Object[] result : resultList) {
			if ((result[0].toString().equalsIgnoreCase("gender") && result[1].toString().contains(gender))) {
				b = true;
			}

			if (result[0].toString().equalsIgnoreCase("minage")) {
				mage = Integer.parseInt(result[1].toString());
			}
			if (result[0].toString().equalsIgnoreCase("maxage")) {
				mxage = Integer.parseInt(result[1].toString());
			}
			sponserId = Long.parseLong(result[2].toString());
		}

		if (b && age >= mage && age <= mxage) {
			return sponserId;
		}

		return null;
	}

	@Override
	public List<Sponsor> getAllSponsors() {
		String sql = "select * from sponsor";

		List<Object[]> sponsors = (ArrayList<Object[]>) entityManager.createNativeQuery(sql).getResultList();
		List<Sponsor> spons = new ArrayList<Sponsor>();
		for (Object obj[] : sponsors) {
			Sponsor sponsor = new Sponsor();
			sponsor.setId(Long.parseLong(obj[0] + ""));
			sponsor.setBudget(obj[1] + "");
			sponsor.setEmail(obj[2] + "");
			sponsor.setName(obj[3] + "");
			sponsor.setPhone(obj[4] + "");
			sponsor.setPostCode(obj[5] + "");
			spons.add(sponsor);
		}
		return spons;
	}

	@Override
	public List<SponsorAddress> getAddressBySPonsorId(Integer sponsorId) {

		Query query = this.entityManager
				.createNativeQuery("select * from sponsor_address a, sponsor s where a.Sponsor_Id=s.id and s.id=?");
		query.setParameter(1, sponsorId);
		List<Object[]> objects = (List<Object[]>) query.getResultList();

		List<SponsorAddress> sponsorAddresses = new ArrayList<SponsorAddress>();

		for (Object[] object : objects) {
			SponsorAddress sponsorAddress = new SponsorAddress();
			sponsorAddress.setId(Long.parseLong(object[0] + ""));
			sponsorAddress.setCity(object[1] + "");
			sponsorAddress.setCountry(object[2] + "");
			sponsorAddress.setDistrict(object[3] + "");
			sponsorAddress.setRegion(object[4] + "");
			sponsorAddress.setState(object[5] + "");
			sponsorAddress.setStreetName1(object[6] + "");
			sponsorAddress.setStreetName2(object[7] + "");
			sponsorAddress.setStreetNumber(object[8] + "");
			sponsorAddress.setSuit(object[9] + "");
			sponsorAddress.setZipcode(object[10] + "");
			sponsorAddresses.add(sponsorAddress);
		}
		return sponsorAddresses;
	}

	@Override
	public Sponsor getSponsorBySponsorId(Integer sponsorId) {

		Query query = this.entityManager.createNativeQuery("select * from sponsor where id=?");
		query.setParameter(1, sponsorId);
		List<Object[]> objects = (List<Object[]>) query.getResultList();
		Sponsor sponsor = new Sponsor();

		for (Object obj[] : objects) {
			sponsor.setId(Long.parseLong(obj[0] + ""));
			sponsor.setBudget(obj[1] + "");
			sponsor.setEmail(obj[2] + "");
			sponsor.setName(obj[3] + "");
			sponsor.setPhone(obj[4] + "");
			sponsor.setPostCode(obj[5] + "");
		}
		return sponsor;
	}

	@Override
	public List<TestCode> getTestCodesBySponsorId(Integer sponsorId) {
		Query query = this.entityManager
				.createNativeQuery("select * from test_code t, sponsor s where t.Sponsor_Id=s.id and s.id=?");
		query.setParameter(1, sponsorId);
		List<Object[]> objects = (List<Object[]>) query.getResultList();

		List<TestCode> testCodes = new ArrayList<TestCode>();

		for (Object[] object : objects) {
			TestCode testCode = new TestCode();
			testCode.setId(Long.parseLong(object[0] + ""));
			testCode.setDescription(object[1] + "");
			testCode.setIsDefalut(Boolean.parseBoolean(object[2] + ""));
			testCode.setStatus(object[3] + "");
			testCode.setTestCode(object[4] + "");
			testCode.setTestName(object[5] + "");
			testCodes.add(testCode);
		}
		return testCodes;
	}

	@Override
	public List<Rule> getSponsorRulesBySponsorId(Integer sponsorId) {
		Query query = this.entityManager
				.createNativeQuery("select * from rule_configuration r, sponsor s where r.Sponsor_Id=s.id and s.id=?");
		query.setParameter(1, sponsorId);
		List<Object[]> objects = (List<Object[]>) query.getResultList();

		List<Rule> rules = new ArrayList<Rule>();

		for (Object[] object : objects) {
			Rule rule = new Rule();
			rule.setId(Long.parseLong(object[0] + ""));
			rule.setRuleName(object[0] + "");
			rule.setRuleValue(object[1] + "");
			rules.add(rule);
		}
		return rules;
	}

}
