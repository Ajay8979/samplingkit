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

import com.medintu.samplingkit.entity.PostalCode;
import com.medintu.samplingkit.entity.PostalCodeMapper;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.service.PostalCodeService;

@Path("/PostalCode")
public class PostalCodeResourceController {

	@Autowired
	private PostalCodeService postalCodeService;

	@POST
	@Path("/createPostalCode")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createPostalCode(PostalCodeMapper postalCodeMapper) {
		try {
			if (null != postalCodeMapper) {
				PostalCode postalCode = new PostalCode();
				BeanUtils.copyProperties(postalCodeMapper, postalCode);
				PostalCode postalCode2 = postalCodeService.createPostalCode(postalCode);
				return new Response(postalCode2, HttpStatus.OK, "PostalCode is saved Successfully");
			}
			return new Response("failure", "unable to save PostalCode");
		} catch (Exception exception) {
			return new Response("conflict", HttpStatus.CONFLICT);
		}
	}
	
	@PUT
	@Path("/updatePostalCode")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response updatePostalCode(PostalCodeMapper postalCodeMapper) {
		try {
			if (null != postalCodeMapper) {
				PostalCode postalCode = new PostalCode();
				BeanUtils.copyProperties(postalCodeMapper, postalCode);
				PostalCode postalCode2 = postalCodeService.createPostalCode(postalCode);
				return new Response(postalCode2, HttpStatus.OK, "PostalCode is updated Successfully");
			}
			return new Response("failure", "unable to update PostalCode");
		} catch (Exception exception) {
			return new Response("conflict", HttpStatus.CONFLICT);
		}
	}

	@DELETE
	@Path("/deletePostalCode/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response deletePostalCode(@PathParam("id") Long id) {
		try {
			if (null != id) {
				
			 postalCodeService.deletePostalCode(id);
				return new Response("Success", "PostalCode is deleted Successfully");
			}
			return new Response("failure", "unable to delete PostalCode");
		} catch (Exception exception) {
			return new Response("conflict", HttpStatus.CONFLICT);
		}
	}
	@GET
	@Path("/getAllPostalCodes")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllPostalCodes() {
		try {

			List<PostalCode> allPostalCodes = postalCodeService.getAllPostalCodes();
			if(null != allPostalCodes && !allPostalCodes.isEmpty()){
			return new Response(allPostalCodes, 0,allPostalCodes.size(),HttpStatus.OK, "PostalCodes are retrieved Successfully");
			}
			return new Response("failure", "unable to retrieve PostalCodes");
		} catch (Exception exception) {
			return new Response("conflict", HttpStatus.CONFLICT);
		}
	}
}
