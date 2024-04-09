package com.github.srlindsey07.appointmentscheduler.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.*;

import java.time.ZonedDateTime;

@Document(collection = "appointments")
public class Appointment {

    @Id
    private String id;

    @Field(name = "patientId", targetType = FieldType.OBJECT_ID)
    @DocumentReference
    private Patient patient;

    @Field(targetType = FieldType.OBJECT_ID)
    private String providerId;

    private ZonedDateTime start;

    private ZonedDateTime end;

    private AppointmentStatus status;

    private AppointmentType type;

    public Appointment() {

    }

    public Appointment(Patient patient, String providerId, ZonedDateTime start, ZonedDateTime end, AppointmentStatus status, AppointmentType type) {
        this.patient = patient;
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

    public Patient getPatientId() {
        return patient;
    }

    public void setPatientId(Patient patientId) {
        this.patient = patientId;
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

    public AppointmentStatus getStatus() {
        return status;
    }

    public void setStatus(AppointmentStatus status) {
        this.status = status;
    }

    public AppointmentType getType() {
        return type;
    }

    public void setType(AppointmentType type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Appointment{" +
                "id='" + id + '\'' +
                ", patientId='" + patient + '\'' +
                ", providerId='" + providerId + '\'' +
                ", start=" + start +
                ", end=" + end +
                ", status=" + status +
                ", type=" + type +
                '}';
    }
}
