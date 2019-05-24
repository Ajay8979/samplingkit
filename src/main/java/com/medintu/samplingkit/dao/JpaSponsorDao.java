package com.medintu.samplingkit.dao;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.util.CollectionUtils;

import com.medintu.samplingkit.entity.PostalCode;
import com.medintu.samplingkit.entity.Rule;
import com.medintu.samplingkit.entity.RuleDetailsMapper;
import com.medintu.samplingkit.entity.RuleMapper;
import com.medintu.samplingkit.entity.Sponsor;
import com.medintu.samplingkit.entity.SponsorAddress;
import com.medintu.samplingkit.entity.TestCode;
import com.medintu.samplingkit.rest.resources.TestCodeSponsorIdMapper;

public class JpaSponsorDao extends JpaDao<Sponsor, Long> implements SponsorDao {

	public JpaSponsorDao() {
		super(Sponsor.class);

	}

	@Override
	public Boolean getSponsorsByPostCode(Integer age, String postCode) {
		String shortPostCode = "";
		if (postCode.length() > 4) {
			shortPostCode = postCode.replaceAll("\\s", "").substring(0, postCode.length() - 3);
		} else {
			shortPostCode = postCode;
		}
		Query query = getEntityManager().createNativeQuery(
				"SELECT s.id,s.sponsor_name FROM sponsor s ,sponsor_postlcode sp,postalcode p WHERE s.id=sp.sponsor_id and sp.postal_id = p.id and p.postal_code='"
						+ shortPostCode + "'");
		List<Object[]> resultList = query.getResultList();

		if (!CollectionUtils.isEmpty(resultList) && resultList.size() > 0) {
			return true;
		}
		return false;
	}

	@Override
	public Long getSponsorsByPostCode(String postCode, String gender, Long ethnicGroupId, Integer age) {

		String shortPostCode = "";
		if (postCode.length() > 4) {
			shortPostCode = postCode.replaceAll("\\s", "").substring(0, postCode.length() - 3);
		} else {
			shortPostCode = postCode;
		}
		Query query = getEntityManager()
				.createNativeQuery("SELECT  gender,min_age_group,max_age_group,sponsor_id,ethnic_groupid "
						+ "FROM rule_configuration r ,sponsor s ,postalcode p "
						+ " WHERE s.id=r.sponsor_id  and  ethnic_groupid=" + ethnicGroupId + ""
						+ " and  p.postal_code='" + shortPostCode + "' and min_age_group <=" + age
						+ " and max_age_group>=" + age);
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

	public Set<TestCode> getTestCodeByPostCodeMapper(String postCode, String gender, Long ethnicGroupId, Integer age) {

		String shortPostCode = postCode.replaceAll("\\s", "");
		if (postCode.length() > 4) {
			shortPostCode = shortPostCode.substring(0, postCode.length() - 3);
		} else {
			shortPostCode = postCode;
		}

		Query query = getEntityManager().createNativeQuery(
				"SELECT (test.testcode_id),test.defaultTest,test.test_name ,gender from      rule_configuration r ,"
						+ "					          sponsor s ,               postalcode p ,"
						+ "					        sponsor_postlcode sp,                 test_code test "
						+ "							WHERE s.id=r.sponsor_id                and  ethnic_groupid="
						+ ethnicGroupId + "						                 and sp.postal_id = p.id  and "
						+ "                 p.postal_code='" + shortPostCode + "' and min_age_group <=" + age
						+ " and max_age_group>=" + age);
		List<Object[]> resultList = query.getResultList();

		boolean flag = false;
		for (Object[] result : resultList) {
			String[] genders = result[3].toString().split(",");
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
				testCode1.setDefaultTest(Boolean.parseBoolean(result[1] + ""));
				testCode1.setTestName(result[2].toString());
				setList.add(testCode1);
			}
		}
		return setList;
	}

	@Override
	public TestCodeSponsorIdMapper getTestCodeByPostCode(String postCode, String gender, Long ethnicGroupId,
			Integer age) {

		String shortPostCode = postCode.replaceAll("\\s", "");
		if (shortPostCode.length() > 4) {
			shortPostCode = shortPostCode.substring(0, shortPostCode.length() - 3);
		} else {
			shortPostCode = postCode;
		}

		Query query = getEntityManager()
				.createNativeQuery("select r.gender,r.sponsor_id,t.testcode_id,t.defaultTest,t.description,t.test_code,"
						+ "t.test_name from rule_configuration r,"
						+ "postalcode p , sponsor_postlcode sp,rule_ethnicgroup re,"
						+ "rule_testcode rt,ethnic_group e,test_code t where sp.sponsor_id=r.sponsor_id"
						+ " and sp.postal_id=p.id " + "and r.rule_id=re.rule_id and e.ethnic_id=re.ethnic_id"
						+ " and r.rule_id=rt.rule_id and t.testcode_id=rt.testcode_id and r.max_age_group>=" + age
						+ " and r.min_age_group<=" + age + " and " + "re.ethnic_id="+ethnicGroupId+" and p.postal_code='"
						+ shortPostCode + "' and r.status='Active'");
		List<Object[]> resultList = query.getResultList();

		List<TestCode> testCodes = new ArrayList<TestCode>();
		TestCodeSponsorIdMapper mapper = new TestCodeSponsorIdMapper();

		for (Object[] result : resultList) {
			String[] genders = result[0].toString().split(",");
			for (String gen : genders) {
				if (gen.equalsIgnoreCase(gender)) {
					mapper.setSponsorId(Long.parseLong(result[1] + ""));
					TestCode testCode = new TestCode();
					testCode.setId(Long.parseLong(result[2] + ""));
					testCode.setDefaultTest(Boolean.parseBoolean(result[3] + ""));
					testCode.setTestCode(result[4] + "");
					testCode.setDescription(result[5] + "");
					testCode.setTestName(result[6] + "");
					testCodes.add(testCode);
				}
			}
		}
		mapper.setTestCodes(testCodes);

		return mapper;
	}

	@Override
	public List<Sponsor> getAllSponsors() {
		String sql = "select * from sponsor";

		List<Object[]> sponsors = (ArrayList<Object[]>) getEntityManager().createNativeQuery(sql).getResultList();
		List<Sponsor> spons = new ArrayList<Sponsor>();
		for (Object obj[] : sponsors) {
			Sponsor sponsor = new Sponsor();
			sponsor.setId(Long.parseLong(obj[0] + ""));
			sponsor.setBudget(Double.parseDouble(obj[1] + ""));
			sponsor.setName(obj[2] + "");
			spons.add(sponsor);
		}
		return spons;
	}

	@Override
	public List<SponsorAddress> getAddressBySPonsorId(Integer sponsorId) {

		Query query = getEntityManager().createNativeQuery("select * from sponsor_address a where a.sponsor_id=?");
		query.setParameter(1, sponsorId);
		List<Object[]> objects = (List<Object[]>) query.getResultList();

		List<SponsorAddress> sponsorAddresses = new ArrayList<SponsorAddress>();

		for (Object[] object : objects) {
			SponsorAddress sponsorAddress = new SponsorAddress();
			sponsorAddress.setId(Long.parseLong(object[0] + ""));
			sponsorAddress.setCity(object[1] + "");
			sponsorAddress.setDistrict(object[2] + "");
			sponsorAddress.setEmail(object[3] + "");
			sponsorAddress.setPhone(object[4] + "");
			sponsorAddress.setPostCode(object[5] + "");
			sponsorAddress.setSponsor_id(Long.parseLong(object[6] + ""));
			sponsorAddress.setStreetName1(object[7] + "");
			sponsorAddress.setStreetNumber(object[8] + "");
			sponsorAddresses.add(sponsorAddress);
		}
		return sponsorAddresses;
	}

	@Override
	public Sponsor getSponsorBySponsorId(Integer sponsorId) {

		Query query = getEntityManager().createNativeQuery("select * from sponsor where id=?");
		query.setParameter(1, sponsorId);
		List<Object[]> objects = (List<Object[]>) query.getResultList();
		Sponsor sponsor = new Sponsor();

		for (Object obj[] : objects) {
			sponsor.setId(Long.parseLong(obj[0] + ""));
			sponsor.setBudget(Double.parseDouble(obj[1] + ""));
			sponsor.setName(obj[2] + "");
		}
		return sponsor;
	}

	@Override
	public List<TestCode> getTestCodesBySponsorId(Integer sponsorId) {
		Query query = getEntityManager()
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
		Query query = getEntityManager().createNativeQuery(
				"select rule_id,gender,min_age_group,max_age_group,sponsor_id,ethnic_groupid,testcode_id,status from rule_configuration r where r.sponsor_id=?");
		query.setParameter(1, sponsorId);
		List<Object[]> objects = (List<Object[]>) query.getResultList();

		List<Rule> rules = new ArrayList<Rule>();

		for (Object[] object : objects) {
			Rule rule = new Rule();
			rule.setId(Long.parseLong(object[0] + ""));
			rule.setGender((object[1] + ""));
			rule.setMinAgeGroup(Long.parseLong(object[2] + ""));
			rule.setMaxAgeGroup(Long.parseLong(object[3] + ""));
			rule.setSponsor_id(Long.parseLong(object[4] + ""));
			rule.setStatus(object[7] + "");
			rules.add(rule);
		}
		return rules;
	}

	@Override
	public List<PostalCode> getPostCodesBySponsorId(Long sponsorId) {

		Query query = getEntityManager().createNativeQuery(
				"select p.id,p.postal_code from postalcode p , sponsor_postlcode s where p.id=s.postal_id "
						+ " and s.sponsor_id=?",
				PostalCode.class);
		query.setParameter(1, sponsorId);
		return query.getResultList();
	}

	@Override
	@Transactional
	public int updatePostCodesBySponsorId(PostalCode postalCode, Long sponsorId) {

		Query query = getEntityManager().createNativeQuery(
				"update sponsor_postlcode sp,postalcode p  set sp.postal_id=? where sp.postal_id=p.id and sp.sponsor_id=? and p.postal_Code=?");
		query.setParameter(1, postalCode.getId());
		query.setParameter(2, sponsorId);
		query.setParameter(3, postalCode.getPostalCode());
		return query.executeUpdate();
	}

	@Override
	public List<TestCode> getTestCodesBySponsorId(Long sponsorId) {
		Query query = getEntityManager().createNativeQuery(
				"select distinct(t.test_code),t.testcode_id,t.description,t.test_name,t.defaultTest from test_code t,rule_configuration r where t.testcode_id=r.testcode_id and r.sponsor_id=?",
				TestCode.class);
		query.setParameter(1, sponsorId);
		return query.getResultList();
	}

	@Override
	@Transactional
	public boolean updatesponsorBudget(Long sponserId, Double budgetSpent) {

		Query query = getEntityManager()
				.createNativeQuery("update sponsor set budget=budget-" + budgetSpent + " where id=" + sponserId);
		if (query.executeUpdate() > 0) {
			return true;
		}
		return false;
	}

	@Override
	public List<RuleDetailsMapper> getRuleDeatilsBySponsorId(Integer sponsorId) {

		Query query = getEntityManager()
				.createNativeQuery("select r.rule_id,r.gender,r.min_age_group,r.max_age_group,r.sponsor_id,"
						+ "re.ethnic_id,rt.testcode_id,r.status,e.ethnic_name,e.ethnic_type,"
						+ "t.test_code,t.test_name,t.description,t.defaultTest from rule_configuration r,rule_ethnicgroup re,rule_testcode rt,test_code t,ethnic_group e where r.rule_id=re.rule_id and e.ethnic_id=re.ethnic_id"
						+ " and r.rule_id=rt.rule_id and t.testcode_id=rt.testcode_id and r.sponsor_id=" + sponsorId);

		List<Object[]> resultObjects = query.getResultList();

		List<RuleDetailsMapper> ruleDetailsMappers = new ArrayList<RuleDetailsMapper>();
		for (Object[] objects : resultObjects) {
			RuleDetailsMapper ruleDetailsMapper = new RuleDetailsMapper();
			ruleDetailsMapper.setId(Long.parseLong(objects[0] + ""));
			ruleDetailsMapper.setGender(objects[1] + "");
			ruleDetailsMapper.setMinAgeGroup(Long.parseLong(objects[2] + ""));
			ruleDetailsMapper.setMaxAgeGroup(Long.parseLong(objects[3] + ""));
			ruleDetailsMapper.setSponsor_id(Long.parseLong(objects[4] + ""));
			ruleDetailsMapper.setEthnicGroupId(Long.parseLong(objects[5] + ""));
			ruleDetailsMapper.setTectCodeId(Long.parseLong(objects[6] + ""));
			ruleDetailsMapper.setStatus(objects[7] + "");
			ruleDetailsMapper.setEthnicName(objects[8] + "");
			ruleDetailsMapper.setEthnicType(objects[9] + "");
			ruleDetailsMapper.setTestCode(objects[10] + "");
			ruleDetailsMapper.setTestName(objects[11] + "");
			ruleDetailsMapper.setDescription(objects[12] + "");
			ruleDetailsMappers.add(ruleDetailsMapper);
		}
		return ruleDetailsMappers;
	}

}
