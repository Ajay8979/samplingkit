package com.medintu.samplingkit.dao;

import java.util.List;
import java.util.Set;

import com.medintu.samplingkit.entity.PostalCode;
import com.medintu.samplingkit.entity.Rule;
import com.medintu.samplingkit.entity.RuleDetailsMapper;
import com.medintu.samplingkit.entity.RuleMapper;
import com.medintu.samplingkit.entity.Sponsor;
import com.medintu.samplingkit.entity.SponsorAddress;
import com.medintu.samplingkit.entity.TestCode;
import com.medintu.samplingkit.rest.resources.TestCodeSponsorIdMapper;

public interface SponsorDao extends Dao<Sponsor, Long> {

	Boolean getSponsorsByPostCode(Integer age, String postCode);

	Long getSponsorsByPostCode(String postCode, String gender, Long ethnicGroup, Integer age);

	List<Sponsor> getAllSponsors();

	List<SponsorAddress> getAddressBySPonsorId(Integer sponsorId);

	Sponsor getSponsorBySponsorId(Integer sponsorId);

	List<TestCode> getTestCodesBySponsorId(Integer sponsorId);

	List<Rule> getSponsorRulesBySponsorId(Integer sponsorId);

	List<PostalCode> getPostCodesBySponsorId(Long sponsorId);

	TestCodeSponsorIdMapper getTestCodeByPostCode(String postCode, String gender, Long ethnicGroupId, Integer age);

	int updatePostCodesBySponsorId(PostalCode postalCode,Long sponsorId);

	List<TestCode> getTestCodesBySponsorId(Long sponsorId);

	boolean updatesponsorBudget(Long sponserId, Double budgetSpent);

	List<RuleDetailsMapper> getRuleDeatilsBySponsorId(Integer sponsorId);

}
