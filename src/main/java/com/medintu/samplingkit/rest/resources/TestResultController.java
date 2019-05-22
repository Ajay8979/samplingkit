package com.medintu.samplingkit.rest.resources;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.CollectionUtils;

import com.medintu.samplingkit.entity.TestResult;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.service.TestResultService;

@Path("/testResult")
public class TestResultController {
	@Autowired
	private TestResultService testResultService;

	@Path("/save")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createTestResult(TestResult testResult) {

		Response response = null;
		try {
			TestResult createTestResult = testResultService.createTestResult(testResult);
			if (null != createTestResult) {
				response = new Response(createTestResult, HttpStatus.OK, "TestResultare  added successfully");
			} else {
				response = new Response("Failed to add test result", HttpStatus.INTERNAL_SERVER_ERROR);
			}
		} catch (Exception e) {
			response = new Response("testresult Type already exists", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;
	}

	@Path("/{orderCode}")
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getTestResultsByOrderCode(@PathParam("orderCode") String orderCode) {

		Response response = null;
		try {
			List<TestResult> createTestResult = testResultService.getTestResultsByOrderCode(orderCode);
			if (!CollectionUtils.isEmpty(createTestResult)) {
				response = new Response(createTestResult, HttpStatus.OK, "Test Result FOUND");
			} else {
				response = new Response("Test Result not FOUND", HttpStatus.INTERNAL_SERVER_ERROR);
			}
		} catch (Exception e) {
			response = new Response("Test Result not FOUND", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;
	}

}
