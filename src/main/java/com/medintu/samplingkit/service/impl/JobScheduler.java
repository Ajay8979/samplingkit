package com.medintu.samplingkit.service.impl;

import javax.mail.MessagingException;

import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.scheduling.quartz.QuartzJobBean;

public class JobScheduler extends QuartzJobBean {

	public DbCompareTask getDbCompareTask() {
		return dbCompareTask;
	}

	public void setDbCompareTask(DbCompareTask dbCompareTask) {
		this.dbCompareTask = dbCompareTask;
	}

	DbCompareTask dbCompareTask;

	@Override
	protected void executeInternal(JobExecutionContext arg0) throws JobExecutionException {
		
			try {
				dbCompareTask.processSchedules();
			} catch (MessagingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
	}

}
