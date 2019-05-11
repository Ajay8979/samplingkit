package com.medintu.samplingkit.rest.resources;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;

import com.medintu.samplingkit.entity.EthnicGroup;
import com.medintu.samplingkit.service.EthnicGroupService;

@Path("/ethnicGroups")
public class EthnicGroupController {

	@Autowired
	private EthnicGroupService ethnicgroupservice;

	@Path("/save")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public EthnicGroup createEthnicGroup(EthnicGroup ethnicgroup) {

		return ethnicgroupservice.createEthnicGroup(ethnicgroup);
	}

	@Path("/find/{ethnicGroupId}")
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public EthnicGroup getEthnicGroupById(@PathParam("ethnicGroupId") Long ethnicGroupId) {
		return ethnicgroupservice.getEthnicGroupById(ethnicGroupId);
	}

	@Path("/getAll")
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<EthnicGroup> getAllEthnicGroups() {
		return ethnicgroupservice.getAllEthnicGroups();
	}

	@Path("/delete/{id}")
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void deleteEthnicGroupById(Long id) {
		ethnicgroupservice.deleteEthnicGroupById(id);
		;
	}

	@Path("/update")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public EthnicGroup updateEthnicGroupById(EthnicGroup ethnicgroup) {
		return ethnicgroupservice.updateEthnicGroupById(ethnicgroup);

	}
}
