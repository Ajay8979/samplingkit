package com.medintu.samplingkit.response;

import java.text.DateFormat;

import java.text.SimpleDateFormat;

import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

public class Response {

	private String status;
	private HttpStatus errorCode;
	private HttpStatus status_code;
	private String errorMessage;
	private String message;
	private ExceptionType exceptionType;
	private Object resultData;
	private int count;
	private int pages;

	public Response() {

	}

	/**
	 * Constructor
	 * 
	 * @param resultData
	 */

	public Response(String status) {
		this.status = status;
	}

	public Response(String status, String errorMessage) {
		super();
		this.status = status;
		this.errorMessage = errorMessage;
	}

	public Response(Object resultData) {
		ObjectMapper mapper = new ObjectMapper();

		mapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
		mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		mapper.setDateFormat(df);

		try {

			this.resultData = mapper.writeValueAsString(resultData);
			JSONParser parser = new JSONParser();
			try {
				this.resultData = parser.parse((String) this.resultData);
			} catch (ParseException e) {
				e.printStackTrace();
			}
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
	}

	public Response(Object resultData, String status) {
		this.status = status;
		this.resultData = resultData;
	}

	public Response(String status, HttpStatus status_code, String message) {
		super();
		this.status = status;
		this.status_code = status_code;
		this.message = message;
	}

	public Response(String status, String errorMessage, HttpStatus errorCode) {
		super();
		this.status = status;
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
	}

	public Response(String status, HttpStatus status_code, String message, Object resultData) {
		super();
		this.status = status;
		this.status_code = status_code;
		this.message = message;
		this.resultData = resultData;
	}

	public Response(Object resultData, HttpStatus status_code, String message) {
		this.resultData = resultData;
		this.status_code = status_code;
		this.message = message;
	}

	public Response(Object resultData, int pages, int count, HttpStatus status_code, String status) {
		this.resultData = resultData;
		this.setPages(pages);
		this.status_code = status_code;
		this.status = status;
		this.count = count;
	}

	public Response(String status, HttpStatus errorCode, String errorMessage, ExceptionType exceptionType) {
		this.status = status;
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
		this.exceptionType = exceptionType;
	}

	public Response(Object resultData, String status, HttpStatus errorCode, String errorMessage,
			ExceptionType exceptionType) {
		this.resultData = resultData;
		this.status = status;
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
		this.exceptionType = exceptionType;
	}

	public Response(String status, HttpStatus errorCode) {
		this.status = status;
		this.errorCode = errorCode;
	}

	public Response(Object resultData, HttpStatus errorCode, String errorMessage, ExceptionType exceptionType) {
		this.resultData = resultData;
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
		this.exceptionType = exceptionType;
	}

	/*
	 * * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status
	 *            the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	public HttpStatus getErrorCode() {
		return errorCode;
	}

	/**
	 * @param errorCode
	 *            the errorCode to set
	 */
	public void setErrorCode(HttpStatus errorCode) {
		this.errorCode = errorCode;
	}

	/**
	 * @return the errorMessage
	 */
	public String getErrorMessage() {
		return errorMessage;
	}

	/**
	 * @param errorMessage
	 *            the errorMessage to set
	 */
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	/**
	 * @return the String
	 */
	public ExceptionType getString() {
		return exceptionType;
	}

	/**
	 * @param String
	 *            the String to set
	 */
	public void setString(ExceptionType String) {
		this.exceptionType = String;
	}

	/**
	 * @return the resultData
	 */
	public Object getresultData() {
		return resultData;
	}

	/**
	 * @param resultData
	 *            the resultData to set
	 */
	public void setresultData(Object resultData) {
		this.resultData = resultData;
	}

	public int getcount() {
		return count;
	}

	public void setcount(int count) {
		this.count = count;
	}

	public int getPages() {
		return pages;
	}

	public void setPages(int pages) {
		this.pages = pages;
	}

	public HttpStatus getStatus_code() {
		return status_code;
	}

	public void setStatus_code(HttpStatus status_code) {
		this.status_code = status_code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
