package com.medintu.samplingkit.rest.resources;

import java.util.ArrayList;
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

import com.medintu.samplingkit.entity.Role;
import com.medintu.samplingkit.entity.User;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.service.SponsorUserService;
import com.medintu.samplingkit.transfer.UserMapper;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Path("/SponsorUser")
public class SponsorUserResourceController {

	@Autowired
	private SponsorUserService sponsorUserService;

	@POST
	@Path("/createUser")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createUser(UserMapper userMapper) {

		try {
			if (null != userMapper) {
				if ((null != userMapper.getFirstName() && (!userMapper.getFirstName().isEmpty()))
						&& (null != userMapper.getLastName() && !userMapper.getLastName().isEmpty())
						&& (null != userMapper.getEmailId() && !userMapper.getEmailId().isEmpty())
						&& (null != userMapper.getMobileNum() && !userMapper.getMobileNum().isEmpty())
						&& (null != userMapper.getUserName() && !userMapper.getUserName().isEmpty())) {
					User user2 = new User();
					user2.setFirstName(userMapper.getFirstName());
					user2.setLastName(userMapper.getLastName());
					user2.setUsername(userMapper.getUserName());
					user2.setEmailId(userMapper.getEmailId());
					user2.setMobileNum(userMapper.getMobileNum());
					user2.setPassword(userMapper.getFirstName() + userMapper.getLastName());
					user2.setStatus("Active");
					if (userMapper.getRole().equalsIgnoreCase("SPONSORUSER")) {
						user2.setSponsorId(userMapper.getSponsorId());
						user2.addRole(Role.COMMISSIONERUSER);
						User saveUser = sponsorUserService.saveUser(user2);
						int usersCount = sponsorUserService.getAllUsersCount();
						return new Response(saveUser, 0, usersCount, HttpStatus.OK, "SPONSORUSER is saved in DB");
					}
					if (userMapper.getRole().equalsIgnoreCase("SUPPORTUSER")) {
						user2.addRole(Role.SUPPORTUSER);
						User saveUser1 = sponsorUserService.saveUser(user2);
						int usersCount = sponsorUserService.getAllUsersCount();
						return new Response(saveUser1, 0, usersCount, HttpStatus.OK, "SUPPORTUSER is saved in DB");
					}

				}
				return new Response("User must not be null", HttpStatus.CONFLICT);
			}
			return new Response("failure", HttpStatus.CONFLICT);
		} catch (Exception exception) {
			String message = exception.getMessage();
			return new Response(message, HttpStatus.CONFLICT, "Unable to save User ");
		}

	}

	@PUT
	@Path("/updateSponsorUser")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateUser(UserMapper userMapper) {

		try {
			if (null != userMapper) {
				if ((null != userMapper.getFirstName() && (!userMapper.getFirstName().isEmpty()))
						&& (null != userMapper.getLastName() && !userMapper.getLastName().isEmpty())
						&& (null != userMapper.getEmailId() && !userMapper.getEmailId().isEmpty())
						&& (null != userMapper.getMobileNum() && !userMapper.getMobileNum().isEmpty())
						&& (null != userMapper.getUserName() && !userMapper.getUserName().isEmpty())) {
					User user2 = new User();
					user2.setId(userMapper.getId());
					user2.setUsername(userMapper.getUserName());
					user2.setFirstName(userMapper.getFirstName());
					user2.setLastName(userMapper.getLastName());
					user2.setEmailId(userMapper.getEmailId());
					user2.setMobileNum(userMapper.getMobileNum());
					user2.setPassword(userMapper.getFirstName() + userMapper.getLastName());
					user2.setSponsorId(userMapper.getSponsorId());

					if (userMapper.getRole().equalsIgnoreCase("SPONSORUSER")) {
						user2.setSponsorId(userMapper.getSponsorId());
						user2.addRole(Role.COMMISSIONERUSER);
						User updateUser = sponsorUserService.saveUser(user2);
						int usersCount = sponsorUserService.getAllUsersCount();
						return new Response(updateUser, 0, usersCount, HttpStatus.OK, "SPONSORUSER is updated in DB");
					}

					if (userMapper.getRole().equalsIgnoreCase("SUPPORTUSER")) {
						user2.setSponsorId(null);
						user2.addRole(Role.SUPPORTUSER);
						User updateUser = sponsorUserService.saveUser(user2);
						int usersCount = sponsorUserService.getAllUsersCount();
						return new Response(updateUser, 0, usersCount, HttpStatus.OK, "SUPPORTUSER is updated in DB");
					}
				}
				return new Response("User must not be null", HttpStatus.CONFLICT);
			}
			return new Response("failure", HttpStatus.CONFLICT);
		} catch (Exception exception) {
			String message = exception.getMessage();
			return new Response(message, HttpStatus.CONFLICT, "Unable to update User ");
		}

	}

	@GET
	@Path("/getAllSponsorUsers")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllUsers() {

		try {
			List<User> allUsers = sponsorUserService.getAllUsers();
			if (!allUsers.isEmpty() && null != allUsers) {
				return new Response(allUsers, 0, allUsers.size(), HttpStatus.OK, "All SponsorUsers retrieved Successfully");
			}
			return new Response(new ArrayList<User>(), "SponsorUser List is Empty");
		} catch (Exception exception) {
			String message = exception.getMessage();
			return new Response(message, HttpStatus.CONFLICT, "Unable to retrieve Users ");
		}

	}

	@DELETE
	@Path("/deleteSponsorUser/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteUser(@PathParam("id") Long id) {

		try {
			if (null != id) {
				User user2 = sponsorUserService.findUserById(id);
				user2.setStatus("Inactive");
				sponsorUserService.saveUser(user2);
				return new Response("Sponsor is deleted", HttpStatus.OK);
			}
			return new Response("failure", HttpStatus.CONFLICT);
		} catch (Exception exception) {
			String message = exception.getMessage();
			return new Response(message, HttpStatus.CONFLICT, "Unable to delete User ");
		}

	}

	@GET
	@Path("/getAllUsersBySponsorId")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllUsersBySponsor() {
		List<User> listUsers = sponsorUserService.getAllUsersBySponsor();
		return new Response(listUsers);

	}

	@GET
	@Path("/getAllUsersBySponsorId/{sponsorId}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllUsersBySponsorId(@PathParam("sponsorId") Long sponsorId) {
		try {
			if (null != sponsorId) {
				List<User> listUsers = sponsorUserService.getAllUsersBySponsorId(sponsorId);
				return new Response(listUsers);
			}

			return new Response("sponsorId must not be  null", HttpStatus.CONFLICT);
		} catch (Exception exception) {
			return new Response("failed", HttpStatus.CONFLICT, "Unable to find  Users ");
		}

	}

	@GET
	@Path("/getAllUsersPerPage/{pageSize}/{pageNum}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllUsersPerPage(@PathParam("pageSize") int pageSize, @PathParam("pageNum") int pageNum) {

		try {
			List<User> allUsers = sponsorUserService.getAllUsersPerPage(pageSize, pageNum);
			if (!allUsers.isEmpty() && null != allUsers) {
				return new Response(allUsers, 0, allUsers.size(), HttpStatus.OK, "All Sponsors retrieved Successfully");
			}
			return new Response(new ArrayList<User>(), "SponsorUser List is Empty");
		} catch (Exception exception) {
			String message = exception.getMessage();
			return new Response(message, HttpStatus.CONFLICT, "Unable to retrieve Users ");
		}

	}
}
