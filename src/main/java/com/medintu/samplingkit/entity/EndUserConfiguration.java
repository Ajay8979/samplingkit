package com.medintu.samplingkit.entity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;

@PropertySource("classpath:application.properties")
@Configuration
public class EndUserConfiguration {
	
	@Autowired
	private Environment environment;
	@Bean
	public String writeORM() {
		return  environment.getProperty("pathORM");
	}
	
	@Bean
	public String writeORU() {
		return  environment.getProperty("pathORU");
	}

}
