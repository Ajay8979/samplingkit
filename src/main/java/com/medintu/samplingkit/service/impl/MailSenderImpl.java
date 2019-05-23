package com.medintu.samplingkit.service.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.mail.BodyPart;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.task.TaskExecutor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;

import com.medintu.samplingkit.service.MailSender;

public class MailSenderImpl implements MailSender {

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

	public void sendMail(String dear, String toMail) {

		String toEmail = toMail;
		String emailBody = String.format(emailTemplate.getText(), dear, "Medintu");
		String emailSubject = emailTemplate.getSubject();
		String fromEmail = emailTemplate.getFrom();

		MimeMessage mimeMessage = mailSender.createMimeMessage();
		taskExecutor.execute(new Runnable() {
			public void run() {
				try {
					MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

					helper.setFrom(fromEmail);
					helper.setTo(toEmail);
					helper.setSubject(emailSubject);
					helper.setText(emailBody);

					MimeMultipart multipart = new MimeMultipart();
					BodyPart messageBodyPart = new MimeBodyPart();

					/*
					 * // Set key values Map<String, String> input = new HashMap<String, String>();
					 * input.put("Author", "java2db.com"); input.put("Topic",
					 * "HTML Template for Email"); input.put("Content In", "English");
					 */
					// HTML mail content

					Map<String, String> inputValues = new HashMap<String, String>();
					inputValues.put("orderDate", new Date().toString());
					inputValues.put("orderNumber", "PO8835353");
					inputValues.put("userName", "Sam");

					String htmlText = htmlToString();

					for (Map.Entry<String, String> entry : inputValues.entrySet()) {

						htmlText=htmlText.replace(entry.getKey().trim(), entry.getValue().trim());
					}

					messageBodyPart.setContent(htmlText, "text/html");
					multipart.addBodyPart(messageBodyPart);
					mimeMessage.setContent(multipart);

					/*
					 * uncomment the following lines for attachment FileSystemResource file = new
					 * FileSystemResource("attachment.jpg");
					 * helper.addAttachment(file.getFilename(), file);
					 */

					mailSender.send(mimeMessage);
					System.out.println("Mail sent successfully.");
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	private String htmlToString() {

		StringBuilder builder = new StringBuilder();

		try {
			BufferedReader reader = new BufferedReader(
					new InputStreamReader(getClass().getResourceAsStream("/order-placed.html")));
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

	/*
	 * try { MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
	 * 
	 * helper.setFrom(fromEmail); helper.setTo(toEmail);
	 * helper.setSubject(emailSubject); helper.setText(emailBody);
	 * 
	 * 
	 * uncomment the following lines for attachment FileSystemResource file = new
	 * FileSystemResource("attachment.jpg");
	 * helper.addAttachment(file.getFilename(), file);
	 * 
	 * 
	 * mailSender.send(mimeMessage); System.out.println("Mail sent successfully.");
	 * } catch (MessagingException e) { e.printStackTrace(); }
	 */

}
