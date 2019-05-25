package com.medintu.samplingkit.service.impl;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.mail.BodyPart;
import javax.mail.MessagingException;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.task.TaskExecutor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;

import com.medintu.samplingkit.entity.EndUserConfiguration;
import com.medintu.samplingkit.entity.TestResult;
import com.medintu.samplingkit.service.EndUserService;
import com.medintu.samplingkit.service.TestResultService;

import ca.uhn.hl7v2.model.Message;
import ca.uhn.hl7v2.model.v25.datatype.XPN;
import ca.uhn.hl7v2.model.v25.group.ORU_R01_ORDER_OBSERVATION;
import ca.uhn.hl7v2.model.v25.message.ORU_R01;
import ca.uhn.hl7v2.model.v25.segment.MSH;
import ca.uhn.hl7v2.model.v25.segment.OBR;
import ca.uhn.hl7v2.model.v25.segment.OBX;
import ca.uhn.hl7v2.model.v25.segment.ORC;
import ca.uhn.hl7v2.model.v25.segment.PID;
import ca.uhn.hl7v2.util.Hl7InputStreamMessageIterator;

public class DbCompareTask {

	@Autowired
	private TestResultService testResultService;

	@Autowired
	private EndUserService endUserService;

	@Autowired
	private MailSenderImpl mailSenderImpl;

	@Autowired
	private EndUserConfiguration userConfiguration;

	@Autowired
	private SimpleMailMessage emailTemplate;

	@Autowired
	private JavaMailSenderImpl mailSender;

	@Autowired
	private TaskExecutor taskExecutor;

	public void setEmailTemplate(SimpleMailMessage emailTemplate) {
		this.emailTemplate = emailTemplate;
	}

	public void setJavaMailSender(JavaMailSenderImpl javaMailSender) {
		this.mailSender = javaMailSender;
	}

	public void processSchedules() throws MessagingException {

		try {

			File fileNew1 = new File(
					"C:\\Users\\kspandana.CORP\\Documents\\New folder\\eclipse\\Folder\\"/*
																							 * userConfiguration.
																							 * writeORU()
																							 */ /*
																								 * + endUser.
																								 * getOrderCode()
																								 *//* + "ORU.hl7" */);

			File[] listOfFiles = fileNew1.listFiles();

			for (File file : listOfFiles) {
				if (file.isFile()) {
					System.out.println(file.getName());
					InputStream is = new FileInputStream(fileNew1);
					is = new BufferedInputStream(is);
					Hl7InputStreamMessageIterator iter = new Hl7InputStreamMessageIterator(is);
					Message oruReadMessage = null;
					while (iter.hasNext()) {
						oruReadMessage = iter.next();
					}

					MSH mshSegment = ((ORU_R01) oruReadMessage).getMSH();
					String applicationName = mshSegment.getSendingApplication().getNamespaceID().toString();

					PID pid = ((ORU_R01) oruReadMessage).getPATIENT_RESULT().getPATIENT().getPID();
					String ethinicGroups = pid.getEthnicGroup(0).getText().toString();
					String gender = pid.getAdministrativeSex().toString();
					String address = pid.getPatientAddress(0).getAddressType().toString();
					String postalCode = pid.getPatientAddress(0).getZipOrPostalCode().toString();

					String phoneNumber = pid.getPhoneNumberHome(0).getTelephoneNumber().toString();
					String mail = pid.getPhoneNumberHome(0).getEmailAddress().toString();
					XPN patientName = pid.getPatientName(0);
					String lastName = patientName.getFamilyName().getSurname().toString();
					String firstName = patientName.getGivenName().toString();

					ORU_R01 oru = (ORU_R01) oruReadMessage.getMessage();
					OBX obx = oru.getPATIENT_RESULT().getORDER_OBSERVATION().getOBSERVATION(0).getOBX();
					String testResult = obx.getValueType().toString();
					String testCode = obx.getObservationIdentifier().getIdentifier().toString();
					String testName = obx.getObservationIdentifier().getText().toString();
					String abnormalFlags = obx.getAbnormalFlags(0).toString();
					String abnormalTest = obx.getNatureOfAbnormalTest(0).toString();
					String abnormalTestResult = obx.getObservationResultStatus().toString();

					ORU_R01_ORDER_OBSERVATION orderObservation = ((ORU_R01) oruReadMessage).getPATIENT_RESULT()
							.getORDER_OBSERVATION();
					OBR obr = orderObservation.getOBR();
					String testCodeObr = obr.getUniversalServiceIdentifier().getIdentifier().toString();
					String testNameObr = obr.getUniversalServiceIdentifier().getText().toString();

					ORC orc = ((ORU_R01) oruReadMessage).getPATIENT_RESULT().getORDER_OBSERVATION().getORC();

					String orderId = orc.getPlacerOrderNumber().getUniversalID().toString();
					String orderStatus = orc.getOrderStatus().toString();
					String sponserId = orc.getOrderingProvider(0).getIDNumber().toString();
					String orderDate = orc.getDateTimeOfTransaction().getTime().toString();

					TestResult testResultData = new TestResult();
					testResultData.setEthinicGroups(ethinicGroups);
					testResultData.setGender(gender);
					testResultData.setMail(mail);
					testResultData.setOrderId(orderId);
					testResultData.setPatientName(firstName);
					testResultData.setPhoneNumber(phoneNumber);
					testResultData.setTestCode(testCode);
					testResultData.setTestName(testResult);
					testResultData.setTestResult(testResult);
					testResultData.setSTATUS(orderStatus);
					testResultData.setOrderDate(orderDate);

					testResultService.createTestResult(testResultData);
					testResultService.updateEnduser(testResultData);

					sendMail(testResultData, mail);
				}
			}

		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	public void sendMail(TestResult testResult, String toMail) throws MessagingException {

		String toEmail = toMail;
		String emailBody = String.format(emailTemplate.getText(), "Dear", "Medintu");
		String emailSubject = emailTemplate.getSubject();
		String fromEmail = emailTemplate.getFrom();

		MimeMessage mimeMessage = mailSender.createMimeMessage();

		MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

		helper.setFrom(fromEmail);
		helper.setTo(toEmail);
		helper.setSubject(emailSubject);
		helper.setText(emailBody);

		MimeMultipart multipart = new MimeMultipart();
		BodyPart messageBodyPart = new MimeBodyPart();

		String htmlText = null;
		if (testResult.getTestResult().equals("Reactive")) {
			htmlText = htmlToStringPositive();
			String orderNUmber = testResult.getOrderId();
			String orderDate = testResult.getOrderDate();
			String year = orderDate.substring(0, 4);
			String month = orderDate.substring(4, 6);
			String day = orderDate.substring(6, 8);
			String date = day + "-" + month + "-" + year;
			String wish = "Hi " + testResult.getPatientName().toString() + ",";

			htmlText = htmlText.replace("641069812084", orderNUmber);
			htmlText = htmlText.replace("09/05/2019", date);
			htmlText = htmlText.replace("Hi Reddy,", wish);

			messageBodyPart.setContent(htmlText, "text/html");
			multipart.addBodyPart(messageBodyPart);
			mimeMessage.setContent(multipart);

			mailSender.send(mimeMessage);
			System.out.println("Mail sent successfully.");
		}
		if (testResult.getTestResult().equals("Non-Reactive")) {
			htmlText = htmlToStringNegative();
			String orderNUmber = testResult.getOrderId();
			String orderDate = testResult.getOrderDate();
			String year = orderDate.substring(0, 4);
			String month = orderDate.substring(4, 6);
			String day = orderDate.substring(6, 8);
			String date = day + "-" + month + "-" + year;
			String wish = "Hi " + testResult.getPatientName().toString() + ",";

			htmlText = htmlText.replace("641069812084", orderNUmber);
			htmlText = htmlText.replace("09/05/2019", date);
			htmlText = htmlText.replace("Hi Reddy,", wish);

			messageBodyPart.setContent(htmlText, "text/html");
			multipart.addBodyPart(messageBodyPart);
			mimeMessage.setContent(multipart);

			mailSender.send(mimeMessage);
			System.out.println("Mail sent successfully.");
		}

	}

	private String htmlToStringPositive() {
		StringBuilder builder = new StringBuilder();
		try {
			BufferedReader reader = new BufferedReader(
					new InputStreamReader(getClass().getResourceAsStream("/HIV Positive Report.html")));
			String str = null;
			while ((str = reader.readLine()) != null) {
				builder.append(str);
				builder.append(System.getProperty("line.separator"));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return builder.toString();
	}

	private String htmlToStringNegative() {
		StringBuilder builder = new StringBuilder();
		try {
			BufferedReader reader = new BufferedReader(
					new InputStreamReader(getClass().getResourceAsStream("/HIV Negative report.html")));
			String str = null;
			while ((str = reader.readLine()) != null) {
				builder.append(str);
				builder.append(System.getProperty("line.separator"));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return builder.toString();
	}

}
