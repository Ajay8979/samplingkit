package com.medintu.samplingkit.service.impl;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.medintu.samplingkit.entity.EndUser;
import com.medintu.samplingkit.entity.EndUserMapper;

import ca.uhn.hl7v2.HL7Exception;
import ca.uhn.hl7v2.model.DataTypeException;
import ca.uhn.hl7v2.model.v25.datatype.XAD;
import ca.uhn.hl7v2.model.v25.datatype.XPN;
import ca.uhn.hl7v2.model.v25.group.ORU_R01_OBSERVATION;
import ca.uhn.hl7v2.model.v25.group.ORU_R01_ORDER_OBSERVATION;
import ca.uhn.hl7v2.model.v25.message.ORM_O01;
import ca.uhn.hl7v2.model.v25.message.ORU_R01;
import ca.uhn.hl7v2.model.v25.segment.MSH;
import ca.uhn.hl7v2.model.v25.segment.OBR;
import ca.uhn.hl7v2.model.v25.segment.OBX;
import ca.uhn.hl7v2.model.v25.segment.ORC;
import ca.uhn.hl7v2.model.v25.segment.PID;

public class OurAdtA01MessageBuilder {

	private ORM_O01 _ormMessage;
	private ORU_R01 _oruMessage;

	public ORM_O01 Build(EndUser endUser) throws HL7Exception, IOException {
		String currentDateTimeString = getCurrentTimeStamp();
		_ormMessage = new ORM_O01();
		// you can use the context class's newMessage method to instantiate a message if
		// you want
		_ormMessage.initQuickstart("ORM", "O01", "P");
		createMshSegment(currentDateTimeString);
		createPidSegment(endUser);
		// createPv1Segment();
		createORCSegment(endUser);
		createOBRSegment(endUser);

		return _ormMessage;
	}

	private void createMshSegment(String currentDateTimeString) throws DataTypeException {
		MSH mshSegment = _ormMessage.getMSH();
		mshSegment.getFieldSeparator().setValue("|");
		mshSegment.getEncodingCharacters().setValue("^~\\&");
		mshSegment.getSendingApplication().getNamespaceID().setValue("Medintu");
		mshSegment.getDateTimeOfMessage().getTime().setValue(getCurrentTimeStamp());
		mshSegment.getVersionID().getVersionID().setValue("2.5");
	}

	private void createPidSegment(EndUser endUser) throws HL7Exception {
		PID pid = _ormMessage.getPATIENT().getPID();
		pid.getSetIDPID().setValue("1");
		pid.getEthnicGroup(0).getText().setValue(endUser.getEthnicGroupId().toString());
		pid.getAdministrativeSex().setValue(endUser.getGender());

		pid.getDateTimeOfBirth().getTime().setValue(getCurrentTimeStamp());
		pid.getPhoneNumberHome(0).getTelephoneNumber().setValue(endUser.getNotificationPhone());
		pid.getPhoneNumberHome(0).getEmailAddress().setValue(endUser.getNotificationEmail());
		XPN patientName = pid.getPatientName(0);
		patientName.getFamilyName().getSurname().setValue(endUser.getLastName());
		patientName.getGivenName().setValue(endUser.getFirstName());

		XAD patientAddress = pid.getPatientAddress(0);
		patientAddress.getAddressType().setValue(endUser.getAddress());
		patientAddress.getZipOrPostalCode().setValue(endUser.getPostCode());

	}

	/*
	 * private void createPv1Segment() throws DataTypeException { PV1 pv1 =
	 * _ormMessage.getPATIENT().getPATIENT_VISIT().getPV1();
	 * pv1.getPatientClass().setValue("O"); // to represent an 'Outpatient' PL
	 * assignedPatientLocation = pv1.getAssignedPatientLocation();
	 * assignedPatientLocation.getFacility().getNamespaceID().
	 * setValue("Some Treatment Facility Name");
	 * assignedPatientLocation.getPointOfCare().setValue("Some Point of Care");
	 * pv1.getAdmissionType().setValue("ALERT"); XCN referringDoctor =
	 * pv1.getReferringDoctor(0);
	 * 
	 * referringDoctor.getIDNumber().setValue("99999999");
	 * referringDoctor.getFamilyName().setValue("Smith");
	 * referringDoctor.getGivenName().setValue("Jack");
	 * referringDoctor.getIdentifierTypeCode().setValue("456789");
	 * pv1.getAdmitDateTime().getTimeOfAnEvent().setValue(getCurrentTimeStamp()); }
	 */

	private void createORCSegment(EndUser endUser) throws HL7Exception {
		ORC orc = _ormMessage.getORDER().getORC();
		orc.getDateTimeOfTransaction().getTime().setValue(getCurrentTimeStamp());
		orc.getOrderStatus().setValue("In Progress");

		orc.getPlacerOrderNumber().getUniversalID().setValue(endUser.getOrderCode());
		orc.getOrderingProvider(0).getIDNumber().setValue(endUser.getSponsorId().toString());
		orc.getEnteredBy(0).getGivenName().setValue(endUser.getFirstName());
		orc.getEnteredBy(0).getFamilyName().getSurname().setValue(endUser.getLastName());
		orc.getOrc13_EntererSLocation().getLocationDescription().setValue(endUser.getPostCode());

	}

	private void createOBRSegment(EndUser endUser) throws HL7Exception {
		OBR obr = _ormMessage.getORDER().getORDER_DETAIL().getOBR();
		obr.getUniversalServiceIdentifier().getIdentifier().setValue("THV5");
		obr.getUniversalServiceIdentifier().getText().setValue("HIV Test");
		obr.getUniversalServiceIdentifier().getNameOfCodingSystem().setValue("00065227");

	}

	private String getCurrentTimeStamp() {
		return new SimpleDateFormat("yyyyMMdd").format(new Date());
	}

	private String getSequenceNumber() {
		String facilityNumberPrefix = "1234"; // some arbitrary prefix for the facility
		return facilityNumberPrefix.concat(getCurrentTimeStamp());
	}

	public ORU_R01 BuildORU(EndUser endUser) throws HL7Exception, IOException {

		String currentDateTimeString = getCurrentTimeStamp();
		_oruMessage = new ORU_R01();

		_oruMessage.initQuickstart("ORU", "R01", "P");
		createMshSegmentORU(currentDateTimeString);
		createPidSegmentORU(endUser);
		// createPv1Segment();
		createORCSegmentORU(endUser);
		createOBRSegmentORU(endUser);
		createOBXSegmentORU(endUser);

		return _oruMessage;

	}

	private void createMshSegmentORU(String currentDateTimeString) throws DataTypeException {
		MSH mshSegment = _oruMessage.getMSH();
		mshSegment.getFieldSeparator().setValue("|");
		mshSegment.getEncodingCharacters().setValue("^~\\&");
		mshSegment.getSendingApplication().getNamespaceID().setValue("Medintu");
		mshSegment.getDateTimeOfMessage().getTime().setValue(getCurrentTimeStamp());
		mshSegment.getVersionID().getVersionID().setValue("2.5");
	}

	private void createPidSegmentORU(EndUser endUser) throws HL7Exception {

		PID pid = _oruMessage.getPATIENT_RESULT().getPATIENT().getPID();
		pid.getSetIDPID().setValue("1");
		pid.getEthnicGroup(0).getText().setValue(endUser.getEthnicGroupId().toString());
		pid.getAdministrativeSex().setValue(endUser.getGender());

		pid.getDateTimeOfBirth().getTime().setValue(getCurrentTimeStamp());
		pid.getPhoneNumberHome(0).getTelephoneNumber().setValue(endUser.getNotificationPhone());
		pid.getPhoneNumberHome(0).getEmailAddress().setValue(endUser.getNotificationEmail());
		XPN patientName = pid.getPatientName(0);
		patientName.getFamilyName().getSurname().setValue(endUser.getLastName());
		patientName.getGivenName().setValue(endUser.getFirstName());

		XAD patientAddress = pid.getPatientAddress(0);
		patientAddress.getAddressType().setValue(endUser.getAddress());
		patientAddress.getZipOrPostalCode().setValue(endUser.getPostCode());

	}

	private void createORCSegmentORU(EndUser endUser) throws HL7Exception {

		ORC orc = _oruMessage.getPATIENT_RESULT().getORDER_OBSERVATION().getORC();
		orc.getDateTimeOfTransaction().getTime().setValue(getCurrentTimeStamp());
		orc.getOrderStatus().setValue("In Progress");

		orc.getPlacerOrderNumber().getUniversalID().setValue(endUser.getOrderCode());
		orc.getOrderingProvider(0).getIDNumber().setValue(endUser.getSponsorId().toString());
		orc.getEnteredBy(0).getGivenName().setValue(endUser.getFirstName());
		orc.getEnteredBy(0).getFamilyName().getSurname().setValue(endUser.getLastName());
		orc.getOrc13_EntererSLocation().getLocationDescription().setValue(endUser.getPostCode());

	}

	private void createOBRSegmentORU(EndUser endUser) throws HL7Exception {
		ORU_R01_ORDER_OBSERVATION orderObservation = _oruMessage.getPATIENT_RESULT().getORDER_OBSERVATION();
		OBR obr = orderObservation.getOBR();
		obr.getUniversalServiceIdentifier().getIdentifier().setValue("THV5");
		obr.getUniversalServiceIdentifier().getText().setValue("HIV Test");
		obr.getUniversalServiceIdentifier().getNameOfCodingSystem().setValue("00065227");

	}

	private void createOBXSegmentORU(EndUser endUser) throws HL7Exception {
		ORU_R01_OBSERVATION observation = _oruMessage.getPATIENT_RESULT().getORDER_OBSERVATION().getOBSERVATION(0);
		OBX obx = observation.getOBX();
		obx.getSetIDOBX().setValue("1");
		obx.getValueType().setValue("NM");
		obx.getObservationIdentifier().getIdentifier().setValue("THV5");
		obx.getObservationIdentifier().getText().setValue("HIV Test");
		obx.getObservationIdentifier().getCe3_NameOfCodingSystem().setValue("00065227");
		obx.getAbnormalFlags(0).setValue("H");
		obx.getNatureOfAbnormalTest(0).setValue("A");
		obx.getObservationResultStatus().setValue("F");
		obx.getDateTimeOfTheObservation().getTime().setValue(getCurrentTimeStamp());

	}

}