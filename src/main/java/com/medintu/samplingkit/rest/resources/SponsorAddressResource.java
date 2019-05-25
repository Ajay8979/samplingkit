package com.medintu.samplingkit.rest.resources;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import com.medintu.samplingkit.entity.SponsorAddress;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.service.SponsorAddressService;

@Path("sponsoraddress")
public class SponsorAddressResource {

	@Autowired
	private SponsorAddressService sponsorAddressService;

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("create")
	public Response createSponsorAddress(SponsorAddress sponsorAddress) {

		Response response = null;

		SponsorAddress createdSponsorAddress = sponsorAddressService.createSponsor(sponsorAddress);
		if (null != createdSponsorAddress) {
			response = new Response(createdSponsorAddress, HttpStatus.OK, "Sponsor Address added successfully");
		} else {
			response = new Response("Sponsor Address not addded ", HttpStatus.CONFLICT);
		}

		return response;
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("create/{sponsorId")
	public Response getSponsorAddress(@PathParam("sponsorId") Long sponsorId) {

		Response response = null;

		SponsorAddress sponsorAddress = sponsorAddressService.findSponsorAddressById(sponsorId);
		if (null != sponsorAddress) {
			response = new Response(sponsorAddress, HttpStatus.OK, "Sponsor Address added successfully");
		} else {
			response = new Response("Sponsor Address not addded ", HttpStatus.CONFLICT);
		}

		return response;
	}

}
