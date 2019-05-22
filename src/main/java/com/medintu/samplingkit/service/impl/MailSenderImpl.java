package com.medintu.samplingkit.service.impl;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

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

}
