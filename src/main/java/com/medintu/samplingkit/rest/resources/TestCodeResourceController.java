package com.medintu.samplingkit.rest.resources;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.medintu.samplingkit.entity.TestCode;
import com.medintu.samplingkit.entity.TestCodeMapper;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.service.TestCodeService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Path("/testCode")
public class TestCodeResourceController {
	@Autowired
	private TestCodeService testCodeService;

	@POST
	@Path("/createTest")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createTestCode(TestCodeMapper testCodeMapper) {

		try {
			if (null != testCodeMapper) {
				if ((null != testCodeMapper.getTestName() && !testCodeMapper.getTestName().isEmpty())
						&& (null != testCodeMapper.getTestCode() && !testCodeMapper.getTestCode().isEmpty())
						&& (null != testCodeMapper.getDescription() && !testCodeMapper.getDescription().isEmpty())) {
					TestCode testCode = new TestCode();
					testCode.setStatus("Active");
					testCode.setIsDefalut(testCodeMapper.isDefalut());
					testCode.setDescription(testCodeMapper.getDescription());
					// testCode.setSponsorId(testCodeMapper.getSponsorId());
					testCode.setTestCode(testCodeMapper.getTestCode());
					testCode.setTestName(testCodeMapper.getTestName());
					TestCode createTestCode = testCodeService.createTestCode(testCode);
					return new Response("Success", HttpStatus.OK, "Testcode added Successfully", createTestCode);
				}
			}
			return new Response("Failure", HttpStatus.CONFLICT);

		} catch (Exception exception) {
			return new Response("Fail", "Unable to add TestCode", HttpStatus.CONFLICT);
		}

	}

	@GET
	@Path("/getAllTestCodes")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllTestcodes() {
		try {
			List<TestCode> allTestcodes = testCodeService.getAllTestcodes();
			if (allTestcodes != null && !allTestcodes.isEmpty()) {
				return new Response("Success", HttpStatus.OK, "Successfully Retrieved all testCodes", allTestcodes);
			}
			return new Response("Fail", HttpStatus.NOT_FOUND, "Test code  Not Found");
		} catch (Exception exception) {
			return new Response("unable to get all records", HttpStatus.NOT_FOUND, "Test code  Not Found");
		}
	}

	@DELETE
	@Path("/deleteTestCode/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteTestCode(@PathParam("id") Long id) {
		TestCode testCode = null;
		try {
			if (null != id) {

				testCode = testCodeService.findTestcodeById(id);
				testCode.setStatus("");
				testCodeService.createTestCode(testCode);
				return new Response("Success", HttpStatus.OK, "Test code is Deleted", id);

			}
			return new Response("Fail", HttpStatus.NOT_ACCEPTABLE, "Given Input Of Test Code is Not Accepted");

		} catch (Exception exception) {
			return new Response("Conflict while deleting record", HttpStatus.NOT_ACCEPTABLE,
					"Given Input Of Test Code is Not Accepted");
		}
	}

	@PUT
	@Path("/updateTestCode")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateTestCode(TestCodeMapper testCodeMapper) {
		try {

			if (null != testCodeMapper) {
				if ((null != testCodeMapper.getTestName() && !testCodeMapper.getTestName().isEmpty())
						&& (null != testCodeMapper.getTestCode() && !testCodeMapper.getTestCode().isEmpty())
						&& (null != testCodeMapper.getDescription() && !testCodeMapper.getDescription().isEmpty())) {
					TestCode testCode = new TestCode();
					testCode.setId(testCodeMapper.getId());
					testCode.setTestCode(testCodeMapper.getTestCode());
					testCode.setTestName(testCodeMapper.getTestName());
					testCode.setDescription(testCodeMapper.getDescription());
					testCode.setIsDefalut(testCodeMapper.isDefalut());

					testCodeService.updateTestCode(testCode);
					return new Response("Success", HttpStatus.OK, "Test Code is updated");
				}
				return new Response("TestCode fields must not be null", HttpStatus.CONFLICT);
			}
			return new Response("Fail", HttpStatus.NOT_ACCEPTABLE, "Given Input Of Test Code is Not Accepted");

		} catch (Exception exception) {
			return new Response("Fail", "Unable to update TestCode", HttpStatus.NOT_ACCEPTABLE);
		}
	}

}
