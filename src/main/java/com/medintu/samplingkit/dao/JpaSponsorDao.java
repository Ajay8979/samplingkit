package com.medintu.samplingkit.dao;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.util.CollectionUtils;

import com.medintu.samplingkit.entity.PostalCode;
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

		Query query = this.entityManager.createNativeQuery(
				"SELECT s.id,s.sponsor_name FROM sponsor s ,sponsor_postlcode sp,postalcode p WHERE s.id=sp.sponsor_id and sp.postal_id = p.id and p.postal_code='"
						+ postCode + "'");
		List<Object[]> resultList = query.getResultList();

		if (!CollectionUtils.isEmpty(resultList) && resultList.size() > 0) {
			return true;
		}
		return false;
	}

	@Override
	public Long getSponsorsByPostCode(String postCode, String gender, Long ethnicGroupId, Integer age) {

		Query query = this.getEntityManager()
				.createNativeQuery("SELECT  gender,min_age_group,max_age_group,sponsor_id,ethnic_groupid "
						+ "FROM rule_configuration r ,sponsor s ,postalcode p "
						+ " WHERE s.id=r.sponsor_id  and  ethnic_groupid=" + ethnicGroupId + ""
						+ " and  p.postal_code='" + postCode + "' and min_age_group <=" + age + " and max_age_group>="
						+ age);
		List<Object[]> resultList = query.getResultList();

		Long sponserId = null;

		for (Object[] result : resultList) {
			String[] genders = result[0].toString().split(",");
			for (String gen : genders) {
				if (gen.equalsIgnoreCase(gender)) {
					sponserId = Long.parseLong(result[3].toString());
					break;
				}
			}
		}
		return sponserId;
	}

	@Override
	public Set<TestCode> getTestCodeByPostCode(String postCode, String gender, Long ethnicGroupId, Integer age) {

		Query query = this.getEntityManager().createNativeQuery(
				"SELECT (test.testcode_id) ," + "         test.test_name ,gender from      rule_configuration r ,"
						+ "					          sponsor s ,               postalcode p ,"
						+ "					        sponsor_postlcode sp,                 test_code test "
						+ "							WHERE s.id=r.sponsor_id                and  ethnic_groupid="
						+ ethnicGroupId + "						                 and sp.postal_id = p.id  and "
						+ "                 p.postal_code='" + postCode + "' and min_age_group <=" + age
						+ " and max_age_group>=" + age );
		List<Object[]> resultList = query.getResultList();
		
		boolean flag = false;
		for (Object[] result : resultList) {
			String[] genders = result[2].toString().split(",");
			for (String gen : genders) {
				if (gen.equalsIgnoreCase(gender)) {
					flag = true;
					break;
				}
			}
		}

		Set<TestCode> setList = new HashSet<TestCode>();

		if (flag) {
			for (Object[] result : resultList) {
				TestCode testCode1 = new TestCode();
				testCode1.setId(Long.parseLong(result[0].toString()));
				testCode1.setTestName(result[1].toString());
				setList.add(testCode1);
			}
		}
		return setList;
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
			spons.add(sponsor);
		}
		return spons;
	}

	@Override
	public List<SponsorAddress> getAddressBySPonsorId(Integer sponsorId) {

		Query query = this.entityManager.createNativeQuery("select * from sponsor_address a where a.sponsor_id=?");
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
		}
		return sponsor;
	}

	@Override
	public List<TestCode> getTestCodesBySponsorId(Integer sponsorId) {
		Query query = this.entityManager
				.createNativeQuery("select * from test_code t, sponsor s where t.sponsor_id=s.id and s.id=?");
		query.setParameter(1, sponsorId);
		List<Object[]> objects = (List<Object[]>) query.getResultList();

		List<TestCode> testCodes = new ArrayList<TestCode>();

		for (Object[] object : objects) {
			TestCode testCode = new TestCode();
			testCode.setId(Long.parseLong(object[0] + ""));
			testCode.setDescription(object[1] + "");
			testCode.setTestCode(object[4] + "");
			testCode.setTestName(object[5] + "");
			testCodes.add(testCode);
		}
		return testCodes;
	}

	@Override
	public List<Rule> getSponsorRulesBySponsorId(Integer sponsorId) {
		Query query = this.entityManager.createNativeQuery(
				"select rule_id,gender,min_age_group,max_age_group,sponsor_id,ethnic_groupid,testcode_id from rule_configuration r where r.sponsor_id=?");
		query.setParameter(1, sponsorId);
		List<Object[]> objects = (List<Object[]>) query.getResultList();

		List<Rule> rules = new ArrayList<Rule>();

		for (Object[] object : objects) {
			Rule rule = new Rule();
			rule.setId(Long.parseLong(object[0] + ""));
			rule.setGender((object[1] + ""));
			rule.setEthnicGroupId(Long.parseLong(object[5] + ""));
			rule.setMinAgeGroup(Long.parseLong(object[2] + ""));
			rule.setMaxAgeGroup(Long.parseLong(object[3] + ""));
			rule.setSponsor_id(Long.parseLong(object[4] + ""));
			rule.setTectCodeId(Long.parseLong(object[6] + ""));
			rules.add(rule);
		}
		return rules;
	}

	@Override
	public List<PostalCode> getPostCodesBySponsorId(Long sponsorId) {

		Query query = this.entityManager.createNativeQuery(
				"select p.id,p.postal_code from postalcode p , sponsor_postlcode s where p.id=s.postal_id "
						+ " and s.sponsor_id=?",
				PostalCode.class);
		query.setParameter(1, sponsorId);
		return query.getResultList();
	}

	@Override
	@Transactional
	public int updatePostCodesBySponsorId(PostalCode postalCode, Long sponsorId) {

		Query query = this.entityManager.createNativeQuery(
				"update sponsor_postlcode sp,postalcode p  set sp.postal_id=? where sp.postal_id=p.id and sp.sponsor_id=? and p.postal_Code=?");
		query.setParameter(1, postalCode.getId());
		query.setParameter(2, sponsorId);
		query.setParameter(3, postalCode.getPostalCode());
		return query.executeUpdate();
	}

	@Override
	public List<TestCode> getTestCodesBySponsorId(Long sponsorId) {
		Query query = this.entityManager.createNativeQuery(
				"select distinct(t.test_code),t.testcode_id,t.description,t.test_name from test_code t,rule_configuration r where t.testcode_id=r.testcode_id and r.sponsor_id=?",
				TestCode.class);
		query.setParameter(1, sponsorId);
		return query.getResultList();
	}

}
