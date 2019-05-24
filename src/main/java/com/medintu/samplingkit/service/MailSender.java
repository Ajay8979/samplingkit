package com.medintu.samplingkit.service;

import com.medintu.samplingkit.entity.EndUser;

public interface MailSender {

	void sendMail(EndUser endUser);

}
