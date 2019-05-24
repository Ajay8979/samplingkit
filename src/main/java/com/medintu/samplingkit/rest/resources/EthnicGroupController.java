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
import org.springframework.util.CollectionUtils;

import com.medintu.samplingkit.entity.EthnicGroup;
import com.medintu.samplingkit.entity.EthnicGroupMapper;
import com.medintu.samplingkit.entity.EthnicGroupResponse;
import com.medintu.samplingkit.response.Response;
import com.medintu.samplingkit.service.EthnicGroupService;

@Path("/ethnicGroups")
public class EthnicGroupController {

	@Autowired
	private EthnicGroupService ethnicgroupservice;

	@Path("/save")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createEthnicGroup(EthnicGroup ethnicgroup) {

		Response response = null;
		try {
			EthnicGroup createdEthnicGroup = ethnicgroupservice.createEthnicGroup(ethnicgroup);
			if (null != createdEthnicGroup) {
				response = new Response(createdEthnicGroup, HttpStatus.OK, "Ethnic Group added successfully");
			} else {
				response = new Response("Failed to add Ethnic Group", HttpStatus.INTERNAL_SERVER_ERROR);
			}
		} catch (Exception e) {
			response = new Response("Ethnic Type already exists", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;
	}

	@Path("/find/{ethnicGroupId}")
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getEthnicGroupById(@PathParam("ethnicGroupId") Long ethnicGroupId) {
		Response response = null;
		EthnicGroup createdEthnicGroup = ethnicgroupservice.getEthnicGroupById(ethnicGroupId);
		if (null != createdEthnicGroup) {
			response = new Response(createdEthnicGroup, HttpStatus.OK, "Ethnic Group Found");
		} else {
			response = new Response("Ethnic Group not found", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;
	}

	@Path("/getAllEthnics")
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllEthnicGroupsList() {
		Response response = null;
		List<EthnicGroup> ethnicGroups = ethnicgroupservice.getAllEthnicGroups();

		if (!CollectionUtils.isEmpty(ethnicGroups)) {
			response = new Response(ethnicGroups,0,ethnicGroups.size(), HttpStatus.OK, "Ethnic Groups found");
		} else {
			response = new Response("Ethnic Groups not found", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;
	}

	@Path("/getAllEthnicMapper")
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllEthnicGroupsMapperList() {
		Response response = null;
		List<EthnicGroup> ethnicGroups = ethnicgroupservice.getAllEthnicGroups();

		List<EthnicGroupMapper> ethnicGroupMappers = new ArrayList<EthnicGroupMapper>();
		if (!CollectionUtils.isEmpty(ethnicGroups)) {
			for (EthnicGroup ethnicGroup : ethnicGroups) {
				EthnicGroupMapper ethnicGroupMapper = new EthnicGroupMapper();
				ethnicGroupMapper.setId(ethnicGroup.getId());
				ethnicGroupMapper.setEthnicName(ethnicGroup.getEthnicName());
				ethnicGroupMapper.setEthnicType(ethnicGroup.getEthnicType());
				ethnicGroupMappers.add(ethnicGroupMapper);
			}
		}

		if (!CollectionUtils.isEmpty(ethnicGroupMappers)) {
			response = new Response(ethnicGroupMappers,0,ethnicGroupMappers.size(), HttpStatus.OK, "Ethnic Groups found");
		} else {
			response = new Response("Ethnic Groups not found", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;
	}

	@Path("/getAll")
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllEthnicGroups() {
		Response response = null;
		List<EthnicGroupResponse> ethnicGroupResponselist = new ArrayList<EthnicGroupResponse>();
		List<EthnicGroup> ethnicGroups = ethnicgroupservice.getAllEthnicGroups();
		List<String> ethnicGroupTypes = ethnicgroupservice.getEthnicByGroup();

		for (String ethnicGroupType : ethnicGroupTypes) {
			List<EthnicGroup> newlist = new ArrayList<EthnicGroup>();
			EthnicGroupResponse ethnicGroupResponse = new EthnicGroupResponse();

			for (EthnicGroup ethnicGroup : ethnicGroups) {
				if (ethnicGroupType.equalsIgnoreCase(ethnicGroup.getEthnicType())) {
					ethnicGroupResponse.setEthnicGroupName(ethnicGroupType);
					newlist.add(ethnicGroup);
				}
			}
			ethnicGroupResponse.setEthnicGroups(newlist);
			ethnicGroupResponselist.add(ethnicGroupResponse);
		}

		if (!CollectionUtils.isEmpty(ethnicGroupResponselist)) {
			response = new Response(ethnicGroupResponselist,0,ethnicGroupResponselist.size(), HttpStatus.OK, "Ethnic Groups found");
		} else {
			response = new Response("Ethnic Groups not found", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;
	}

	@Path("/delete/{id}")
	@DELETE
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteEthnicGroupById(Long id) {
		ethnicgroupservice.deleteEthnicGroupById(id);
		return new Response("Ethnic Group deleted successfully", HttpStatus.OK);
	}

	@Path("/update")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateEthnicGroupById(EthnicGroup ethnicgroup) {
		Response response = null;
		try {
			EthnicGroup createdEthnicGroup = ethnicgroupservice.updateEthnicGroupById(ethnicgroup);
			if (null != createdEthnicGroup) {
				response = new Response(createdEthnicGroup, HttpStatus.OK, "Ethnic Group updated successfully");
			} else {
				response = new Response("Failed to update Ethnic Group", HttpStatus.INTERNAL_SERVER_ERROR);
			}
		} catch (Exception e) {
			response = new Response("Ethnic Type already exists", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;

	}
}
