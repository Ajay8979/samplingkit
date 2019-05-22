package com.medintu.samplingkit.service.impl;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medintu.samplingkit.dao.EndUserDao;
import com.medintu.samplingkit.dao.SponsorDao;
import com.medintu.samplingkit.entity.EndUser;
import com.medintu.samplingkit.entity.EndUserMapper;
import com.medintu.samplingkit.rest.resources.TestCodeSponsorIdMapper;
import com.medintu.samplingkit.service.EndUserService;

import ca.uhn.hl7v2.HL7Exception;
import ca.uhn.hl7v2.model.Message;
import ca.uhn.hl7v2.model.v25.message.ORM_O01;
import ca.uhn.hl7v2.model.v25.message.ORU_R01;
import ca.uhn.hl7v2.parser.Parser;

@Service
public class EndUserServiceImpl implements EndUserService {

	@Autowired
	private SponsorDao sponsorDao;

	@Autowired
	private EndUserDao endUserDao;

	@Override
	public Boolean validateAgeAndPostCode(Integer age, String postCode) {

		return sponsorDao.getSponsorsByPostCode(age, postCode);

	}

	@Override
	public Long validateGenderAndEthnicGroup(EndUserMapper endUserMapper) {

		Long value = sponsorDao.getSponsorsByPostCode(endUserMapper.getPostCode(), endUserMapper.getGender(),
				endUserMapper.getEthnicGroupId(), endUserMapper.getAge());
		return value;

	}

	@Override
	public EndUser addEndUser(EndUser endUser) {
		return endUserDao.save(endUser);
	}

	@Override
	public List<EndUser> getEndUsersBySponserId(Long sponserId) {
		return endUserDao.getEndUsersBySponserId(sponserId);
	}

	@Override
	public List<EndUser> getEndUsers() {
		return endUserDao.findAll();
	}

	@Override
	public List<EndUser> getEndUsersByOrderCode(String orderCode) {
		return endUserDao.getEndUsersByOrderCode(orderCode);

	}

	@Override
	public EndUser updateEndUserById(EndUser endUser) {
		// TODO Auto-generated method stub
		return endUserDao.save(endUser);
	}

	@Override
	public TestCodeSponsorIdMapper getDefaultTestCodes(EndUserMapper endUserMapper) {
		return sponsorDao.getTestCodeByPostCode(endUserMapper.getPostCode(), endUserMapper.getGender(),
				endUserMapper.getEthnicGroupId(), endUserMapper.getAge());
	}

	@Override
	public List<EndUser> getEndUsersInGivenDates(String stratDate, String endDate) {
		return endUserDao.getEndUsersInGivenDates(stratDate, endDate);
	}

	@Override
	public List<EndUser> searchEndUser(String searchString) {
		return endUserDao.searchEndUser(searchString);
	}

	public Message createMessage(String messageType, EndUser endUser) throws HL7Exception, IOException {

		// This patterns enables you to build other message types
		if (messageType.equals("O01")) {
			return new OurAdtA01MessageBuilder().Build(endUser);
		}
		if (messageType.equals("R01")) {
			return new OurAdtA01MessageBuilder().BuildORU(endUser);
		}
		// if other types of ADT messages are needed, then implement your builders here
		throw new RuntimeException(
				String.format("%s message type is not supported yet. Extend this if you need to", messageType));

	}

	public File writeMessageToFileORM(Parser parser, ORM_O01 ormMessage, String outputFilename)
			throws IOException, FileNotFoundException, HL7Exception {
		OutputStream outputStream = null;
		try {

			// Remember that the file may not show special delimiter characters when using
			// plain text editor
			File file = new File(outputFilename);

			// quick check to create the file before writing if it does not exist already
			if (!file.exists()) {
				file.createNewFile();
			}

			System.out.println("Serializing message to file...");
			outputStream = new FileOutputStream(file);
			outputStream.write(parser.encode(ormMessage).getBytes());
			outputStream.flush();

			System.out.printf("Message serialized to file '%s' successfully", file);
			System.out.println("\n");
			return file;
		} finally {
			if (outputStream != null) {
				outputStream.close();
			}
		}

	}

	public File writeMessageToFileORU(Parser parser, ORU_R01 oruMessage, String outputFilename)
			throws IOException, FileNotFoundException, HL7Exception {
		OutputStream outputStream = null;
		try {

			// Remember that the file may not show special delimiter characters when using
			// plain text editor
			File file = new File(outputFilename);

			// quick check to create the file before writing if it does not exist already
			if (!file.exists()) {
				file.createNewFile();
			}

			System.out.println("Serializing message to file...");
			outputStream = new FileOutputStream(file);
			outputStream.write(parser.encode(oruMessage).getBytes());
			outputStream.flush();

			System.out.printf("Message serialized to file '%s' successfully", file);
			System.out.println("\n");
			return file;
		} finally {
			if (outputStream != null) {
				outputStream.close();
			}
		}

	}

}
