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

import com.medintu.samplingkit.entity.Status;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.service.StatusService;

@CrossOrigin(origins="*",allowedHeaders="*")
@Path("/Status")
public class StatusResourceController {

	@Autowired
	private StatusService statusService;

	@POST
	@Path("/createStatus")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response addStatus(Status status) {
		try {
			if (null != status & null != status.getNameOfTheStatus()) {
				Status status2 = statusService.createStatus(status);
				return new Response(status2, HttpStatus.OK, "Status is saved Successfully");
			}
			return new Response("failure", HttpStatus.CONFLICT, "Status is not saved Successfully");
		} catch (Exception exception) {
			String message = exception.getMessage();
			return new Response(message, HttpStatus.CONFLICT, "Unable to save Status ");
		}
	}

	@PUT
	@Path("/updateStatus/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateStatus(@PathParam("id") Long id, Status status) {
		try {
			if (null != status & null != status) {
				Status statusObj = statusService.findStatusById(id);
				statusObj.setNameOfTheStatus(status.getNameOfTheStatus());
				statusService.createStatus(statusObj);
				return new Response(statusObj, HttpStatus.OK, "Status is updated Successfully");
			}
			return new Response("failure", HttpStatus.CONFLICT, "Status is not updated Successfully");
		} catch (Exception exception) {
			String message = exception.getMessage();
			return new Response(message, HttpStatus.CONFLICT, "Unable to update Status ");
		}

	}

	@GET
	@Path("/getAllStatus")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllStatus() {
		try {
			List<Status> allStatus = statusService.getAllStatus();
			if (null != allStatus && !allStatus.isEmpty()) {
				return new Response( allStatus,0,allStatus.size(), HttpStatus.OK, "All records are retrieved");
			}
			return new Response("failure", HttpStatus.CONFLICT);
		} catch (Exception exception) {
			exception.getMessage();
			return new Response("conflict in getting records", HttpStatus.CONFLICT);
		}

	}

	@GET
	@Path("/getStatusById/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getStatusById(@PathParam("id") Long id) {
		try {
			Status status = statusService.findStatusById(id);
			if (null != status) {
				return new Response("Success", HttpStatus.OK, "Status is retrieved by Id", status);
			}
			return new Response("failure", HttpStatus.CONFLICT);
		} catch (Exception exception) {
			exception.getMessage();
			return new Response("conflict in getting records", HttpStatus.CONFLICT);
		}

	}

	@DELETE
	@Path("/getStatusById/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteStatusById(@PathParam("id") Long id) {
		try {
			if (id > 0) {
				statusService.deleteStatus(id);

				return new Response("Success", HttpStatus.OK, "Status is retrieved by Id", +id);
			}
			return new Response("failure", HttpStatus.CONFLICT);
		} catch (Exception exception) {
			exception.getMessage();
			return new Response("conflict in getting records", HttpStatus.CONFLICT);
		}

	}
}
