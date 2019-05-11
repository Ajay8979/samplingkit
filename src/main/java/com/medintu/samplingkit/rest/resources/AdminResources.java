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
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.medintu.samplingkit.entity.Role;
import com.medintu.samplingkit.entity.User;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.response.TrafficException;
import com.medintu.samplingkit.service.UserService;

/**
 * 
 * @author rramesh
 *
 */

@Component
@CrossOrigin(origins="*",allowedHeaders="*")
@Path("/admin")
public class AdminResources {

	

	@Autowired
	private UserService userService;

	

	/*
	 * @Autowired private OffenseCategoryService categoriesService;
	 * 
	 * @Autowired private OffensesService offensesService;
	 * 
	 * @Autowired private RewardPointService rewardService;
	 */
	@Autowired
	private PasswordEncoder encoder;

	// Create User
	@POST
	@Path("/addAdmin")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createUser(User user) {
		User result = null;
		try {
			User userExist = userService.loadUserByUsername(user.getUsername());
			if (userExist == null) {
				if (!(user.equals(null))) {
					user.addRole(Role.USER);
					user.setPassword(encoder.encode(user.getPassword()));
					result = userService.createUser(user);
				}
			} else
				throw new TrafficException("User Already Registered with mailId: " +user.getUsername());
		} catch (TrafficException e) {
			return new Response("Fail", e.getMessage(), HttpStatus.IM_USED);
		} catch (Exception e) {
			e.printStackTrace();
			return new Response("Fail", "User Creation Failed", HttpStatus.BAD_REQUEST);
		}

		return new Response("Success", HttpStatus.OK, "User Created Successfully", result);
	}

	@GET
	@Path("/getUsers/{pgNum}/{pgSize}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getUsers(@PathParam("pgNum") int pageNum, @PathParam("pgSize") int pageSize) {
		Response response = userService.findUsersByRoles(pageNum, pageSize);
		return response;

	}

	@GET
	@Path("/getAdmins/{pgNum}/{pgSize}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAdmins(@PathParam("pgNum") int pageNum, @PathParam("pgSize") int pageSize) {
		Response response = userService.findAdminsByRoles(pageNum, pageSize);
		return response;
	}

	// All Registered Users.
	@GET
	@Path("/allUsers/{pgNum}/{pgSize}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllUsersByPaging(@PathParam("pgNum") int pgNum, @PathParam("pgSize") int pgSize) {

		return new Response("Success", HttpStatus.OK, "Successfully Retrieved all Users",
				userService.findByAllUser(pgNum, pgSize));
	}

	// All Posted Issues
	
}
