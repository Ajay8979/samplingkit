package com.medintu.samplingkit.entity;

public class Hl7Message {

	private ORMMessage ormMessage;

	private ORUMessage oruMessage;

	public ORMMessage getOrmMessage() {
		return ormMessage;
	}

	public void setOrmMessage(ORMMessage ormMessage) {
		this.ormMessage = ormMessage;
	}

	public ORUMessage getOruMessage() {
		return oruMessage;
	}

	public void setOruMessage(ORUMessage oruMessage) {
		this.oruMessage = oruMessage;
	}

}
