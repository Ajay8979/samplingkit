package com.medintu.samplingkit.rest.resources;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.CollectionUtils;

import com.medintu.samplingkit.dao.SponsorSpentDao;
import com.medintu.samplingkit.entity.SponsorSpentBudgetMapper;
import com.medintu.samplingkit.entity.SponsorSpentMapper;
import com.medintu.samplingkit.response.Response;

@Path("spnsorspents")
public class SponsorSpentResourceController {

	@Autowired
	private SponsorSpentDao sponsorSpentDao;

	@Path("/{sponsorId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getSponsorSpentsBySponsorId(@PathParam("sponsorId") Long sponsorId) {

		Response response = null;
		List<SponsorSpentBudgetMapper> sponsorSpents = sponsorSpentDao.getSponsorSpents(sponsorId);
		if (!CollectionUtils.isEmpty(sponsorSpents)) {
			response = new Response(sponsorSpents, HttpStatus.OK, "sponsor spent details found");
		} else {
			response = new Response("Sponsor spent details not found", HttpStatus.CONFLICT);
		}

		return response;

	}

	@Path("/budget")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getSponsorBudgetDetailsByPonsorId(@QueryParam("sponsorId") Long sponsorId) {

		Response response = null;
		List<SponsorSpentMapper> SponsorSpentMappers = sponsorSpentDao.getSponsorBudgetDetails(sponsorId);
		if (!CollectionUtils.isEmpty(SponsorSpentMappers)) {
			response = new Response(SponsorSpentMappers, HttpStatus.OK, "sponsor spent details found");
		} else {
			response = new Response("Sponsor spent details not found", HttpStatus.CONFLICT);
		}

		return response;

	}

	/*
	 * @Path("/budget")
	 * 
	 * @GET
	 * 
	 * @Produces(MediaType.APPLICATION_JSON) public Response
	 * getSponsorBudgetDetails() {
	 * 
	 * Response response = null; List<SponsorSpentMapper> SponsorSpentMappers =
	 * sponsorSpentDao.getSponsorBudgetDetails(); if
	 * (!CollectionUtils.isEmpty(SponsorSpentMappers)) { response = new
	 * Response(SponsorSpentMappers, HttpStatus.OK, "sponsor spent details found");
	 * } else { response = new Response("Sponsor spent details not found",
	 * HttpStatus.CONFLICT); }
	 * 
	 * return response;
	 * 
	 * }
	 */
}
