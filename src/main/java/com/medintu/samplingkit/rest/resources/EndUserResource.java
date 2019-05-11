package com.medintu.samplingkit.rest.resources;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.medintu.samplingkit.entity.EndUser;
import com.medintu.samplingkit.entity.EndUserMapper;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.service.EndUserService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Path("endUsers")
public class EndUserResource {

	@Autowired
	private EndUserService endUserService;

	@Path("/validateAgeAndPostCode")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response validateEndUserAgeAndPostCode(EndUserMapper endUserMapper) {

		Response response = null;

		if (null != endUserMapper.getAge() && !StringUtils.isEmpty(endUserMapper.getPostCode())) {
			if (endUserMapper.getAge() >= 16
					&& endUserService.validateAgeAndPostCode(endUserMapper.getAge(), endUserMapper.getPostCode())) {

				response = new Response("Success", HttpStatus.OK);

			} else {
				response = new Response(
						"Sorry - we're not able to offer postal tests to under 16s in your area, but other services are available.",
						HttpStatus.NOT_FOUND);
			}
		}

		return response;
	}

	@Path("/validateGenderAndEthnicGroup")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response validateEndUserGenderAndEthnicGroup(EndUserMapper endUserMapper) {

		Response response = null;

		if (!StringUtils.isEmpty(endUserMapper.getPostCode()) && !StringUtils.isEmpty(endUserMapper.getGender())
				&& !StringUtils.isEmpty(endUserMapper.getEthnicGroup())) {
			if (endUserService.validateGenderAndEthnicGroup(endUserMapper)) {
				response = new Response("Success", HttpStatus.OK);
			} else {
				response = new Response(
						"Sorry - we're not able to offer postal tests to under 16s in your area, but other services are available.",
						HttpStatus.NOT_FOUND);
			}
		}

		return response;
	}

	@Path("/create")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createEndUser(EndUserMapper endUserMapper) {

		Response response = null;

		EndUser endUser = new EndUser();

		BeanUtils.copyProperties(endUserMapper, endUser);

		if (endUserService.addEndUser(endUser)) {
			response = new Response("Success", HttpStatus.OK, "PO" + Math.round(Math.random() * 100000000));
		} else {
			response = new Response("Failed to add End User.", HttpStatus.NOT_FOUND);
		}

		return response;
	}
}
