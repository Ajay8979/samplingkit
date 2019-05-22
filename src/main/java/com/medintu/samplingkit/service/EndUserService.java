package com.medintu.samplingkit.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import com.medintu.samplingkit.entity.EndUser;
import com.medintu.samplingkit.entity.EndUserMapper;
import com.medintu.samplingkit.rest.resources.TestCodeSponsorIdMapper;

import ca.uhn.hl7v2.HL7Exception;
import ca.uhn.hl7v2.model.Message;
import ca.uhn.hl7v2.model.v25.message.ORM_O01;
import ca.uhn.hl7v2.model.v25.message.ORU_R01;
import ca.uhn.hl7v2.parser.Parser;

public interface EndUserService {

	Boolean validateAgeAndPostCode(Integer age, String postCode);
	
	Long validateGenderAndEthnicGroup(EndUserMapper endUserMapper);
	
	EndUser addEndUser(EndUser endUser);

	List<EndUser> getEndUsersBySponserId(Long sponserId);

	List<EndUser> getEndUsers();

	List<EndUser> getEndUsersByOrderCode(String orderCode);

	//public EndUser updateEthnicGroupById(EndUser endUser);

	EndUser updateEndUserById(EndUser endUser);

	TestCodeSponsorIdMapper getDefaultTestCodes(EndUserMapper endUserMapper);

	List<EndUser> getEndUsersInGivenDates(String stratDate, String endDate);

	List<EndUser> searchEndUser(String searchString);
	
	Message createMessage(String messageType, EndUser endUser) throws HL7Exception, IOException;

	public File writeMessageToFileORM(Parser parser, ORM_O01 adtMessage, String outputFilename)
			throws IOException, FileNotFoundException, HL7Exception;
	
	public File writeMessageToFileORU(Parser parser, ORU_R01 oruMessage, String outputFilename)
			throws IOException, FileNotFoundException, HL7Exception;
}
