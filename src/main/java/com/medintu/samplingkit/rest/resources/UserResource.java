package com.medintu.samplingkit.rest.resources;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.medintu.samplingkit.entity.AccessToken;
import com.medintu.samplingkit.entity.User;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.service.UserService;
import com.medintu.samplingkit.transfer.UserTransfer;

/**
 * @author Philip Washington Sorst <philip@sorst.net>
 */

@Component
@CrossOrigin(origins="*",allowedHeaders="*")
@Path("/user")
public class UserResource {
	@Autowired
	private UserService userService;
	@Autowired
	@Qualifier("authenticationManager")
	private AuthenticationManager authManager;
	@Autowired
	private PasswordEncoder encoder;
		
	private JavaMailSender javaMailSender;
	@Autowired
	private MessageSource messages;

	SimpleDateFormat sdf1;
	Date date;
	java.sql.Date sqlStartDate;
	
	SimpleDateFormat formatter = null;

	/**
	 * Retrieves the currently logged in user.
	 *
	 * @return A transfer containing the username and the roles.
	 */

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public UserTransfer getUser() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		Object principal = authentication.getPrincipal();
		if (!(principal instanceof UserDetails)) {
			throw new WebApplicationException(javax.ws.rs.core.Response.Status.UNAUTHORIZED);
		}
		UserDetails userDetails = (UserDetails) principal;
		return new UserTransfer(userDetails.getUsername(), this.createRoleMap(userDetails));
	}

	/**
	 * Authenticates a user and creates an access token.
	 *
	 * @param username
	 *            The name of the user.
	 * @param password
	 *            The password of the user.
	 * @return The generated access token.
	 */
	@Path("authenticate")
	@POST
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.APPLICATION_JSON)
	public Response authenticate(@FormParam("username") String username, @FormParam("password") String password) {
		AccessToken token = null;
		if (username.equals(null) || password.equals(null) || username.isEmpty() || password.isEmpty()) {
			return new Response("Fail", "Please Enter the username and password.", HttpStatus.BAD_REQUEST);
		}

		User user = userService.loadUserByUsername(username);

		try {

			UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
					username, password);
			Authentication authentication = this.authManager.authenticate(authenticationToken);
			SecurityContextHolder.getContext().setAuthentication(authentication);

			Object principal = authentication.getPrincipal();

			if (!(principal instanceof User)) {
				throw new WebApplicationException(javax.ws.rs.core.Response.Status.UNAUTHORIZED);
			}

			token = this.userService.createAccessToken((User) principal);

		} catch (BadCredentialsException we) {
			return new Response("Fail", "Username or Password is invalid. Please try again.", HttpStatus.UNAUTHORIZED);
		} catch (Exception e) {
			e.printStackTrace();
			return new Response("Fail", "The user with mail " + username + " is not found", HttpStatus.NOT_ACCEPTABLE);
		}

		return new Response("Success", HttpStatus.OK, "Successfully Logged in.", token);

	}

	private Map<String, Boolean> createRoleMap(UserDetails userDetails) {
		Map<String, Boolean> roles = new HashMap<>();
		for (GrantedAuthority authority : userDetails.getAuthorities()) {
			roles.put(authority.getAuthority(), Boolean.TRUE);
		}
		return roles;
	}

	
	@Path("/logout/{id}/{token}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response logout(@PathParam("id") Long userId, @PathParam("token") String accessToken) {
		AccessToken token = userService.findAccessTokenByUserId(userId, accessToken);
		if (null != token) {
			Date date = Calendar.getInstance().getTime();
			token.setExpiry(date);
			userService.updateAccessToken(token);
		}
		return new Response("Success", HttpStatus.OK, "LogOut Successful");

	}

}
