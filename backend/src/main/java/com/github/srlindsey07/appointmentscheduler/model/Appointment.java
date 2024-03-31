package com.github.srlindsey07.appointmentscheduler.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.*;

import java.time.ZonedDateTime;

@Document(collection = "appointments")
public class Appointment {

    @Id
    private String id;

    @Field(targetType = FieldType.OBJECT_ID)
    private String patientId;

    @Field(targetType = FieldType.OBJECT_ID)
    private String providerId;

    private ZonedDateTime start;

    private ZonedDateTime end;

    private AppointmentStatusEnum status;

    private AppointmentTypeEnum type;

    public Appointment() {

    }

    public Appointment(String id, String patientId, String providerId, ZonedDateTime start, ZonedDateTime end, AppointmentStatusEnum status, AppointmentTypeEnum type) {
        this.patientId = patientId;
        this.providerId = providerId;
        this.start = start;
        this.end = end;
        this.status = status;
        this.type = type;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPatientId() {
        return patientId;
    }

    public void setPatientId(String patientId) {
        this.patientId = patientId;
    }

    public String getProviderId() {
        return providerId;
    }

    public void setProviderId(String providerId) {
        this.providerId = providerId;
    }

    public ZonedDateTime getStart() {
        return start;
    }

    public void setStart(ZonedDateTime start) {
        this.start = start;
    }

    public ZonedDateTime getEnd() {
        return end;
    }

    public void setEnd(ZonedDateTime end) {
        this.end = end;
    }

    public AppointmentStatusEnum getStatus() {
        return status;
    }

    public void setStatus(AppointmentStatusEnum status) {
        this.status = status;
    }

    public AppointmentTypeEnum getType() {
        return type;
    }

    public void setType(AppointmentTypeEnum type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Appointment{" +
                "id='" + id + '\'' +
                ", patientId='" + patientId + '\'' +
                ", providerId='" + providerId + '\'' +
                ", start=" + start +
                ", end=" + end +
                ", status=" + status +
                ", type=" + type +
                '}';
    }
}
