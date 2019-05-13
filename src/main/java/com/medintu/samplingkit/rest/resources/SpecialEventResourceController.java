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

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.medintu.samplingkit.entity.SpecialEvent;
import com.medintu.samplingkit.entity.SpecialEventMapper;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.service.SpecialEventService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Path("/SpecialEvent")
public class SpecialEventResourceController {

	@Autowired
	private SpecialEventService specialEventService;

	@POST
	@Path("/createSpecialEvent")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createSpecialEvent(SpecialEventMapper specialEventMapper) {
		try {
			if (null != specialEventMapper && null != specialEventMapper.getEventName()
					&& !specialEventMapper.getEventName().isEmpty()) {

				SpecialEvent specialEvent = new SpecialEvent();
				BeanUtils.copyProperties(specialEventMapper, specialEvent);
				SpecialEvent event = specialEventService.addSpecialEvent(specialEvent);
				return new Response(event, HttpStatus.OK, "Success");
			}
			return new Response("Failure", HttpStatus.CONFLICT);
		} catch (Exception exception) {
			return new Response("failure", "Unable save SpecialEvent");
		}

	}

	@GET
	@Path("/getSpecialEvents")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getSpecialEvents() {
		try {

			List<SpecialEvent> allSpecialEvents = specialEventService.getAllSpecialEvents();
			if (null != allSpecialEvents && !allSpecialEvents.isEmpty()) {
				return new Response(allSpecialEvents, HttpStatus.OK, "Success");
			}
			return new Response("Failure", HttpStatus.CONFLICT);
		} catch (Exception exception) {
			return new Response("failure", "Unable save SpecialEvent");
		}
	}

	@GET
	@Path("/getSpecialEventById/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getSpecialEventById(@PathParam("id") Long id) {
		try {
			if (id != null) {
				SpecialEvent specialEvent = specialEventService.getSpecialEventById(id);
				return new Response(specialEvent, HttpStatus.OK, "Success");
			}
			return new Response("Failure", HttpStatus.CONFLICT);
		} catch (Exception exception) {
			return new Response("failure", "Unable to find SpecialEvent");
		}
	}

	@PUT
	@Path("/updateSpecialEvent")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateSpecialEvent(SpecialEventMapper specialEventMapper) {
		try {
			if (null != specialEventMapper && null != specialEventMapper.getEventName()
					&& !specialEventMapper.getEventName().isEmpty()) {

				SpecialEvent specialEvent = new SpecialEvent();
				BeanUtils.copyProperties(specialEventMapper, specialEvent);
				SpecialEvent event = specialEventService.updateSpecialEvent(specialEvent);
				return new Response(event, HttpStatus.OK, "Success");
			}
			return new Response("Failure", HttpStatus.CONFLICT);
		} catch (Exception exception) {
			return new Response("failure", "Unable update SpecialEvent");
		}

	}

	@DELETE
	@Path("/deleteSpecialEvent/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteSpecialEvent(@PathParam("id") Long id) {
		try {
			if (id != null) {
				specialEventService.deleteSpecialEvent(id);
				return new Response("Success", "SpecialEvent is deleted");
			}
			return new Response("Failure", HttpStatus.CONFLICT);
		} catch (Exception exception) {
			return new Response("failure", "Unable delete SpecialEvent");
		}

	}

}
