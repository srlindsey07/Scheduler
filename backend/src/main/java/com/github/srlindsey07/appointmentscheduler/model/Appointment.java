package com.github.srlindsey07.appointmentscheduler.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;

@Document(collection = "appointments")
public class Appointment {

    @Id
    private String id;

    @DBRef
    @Field(name = "patient_id")
    private Patient patientId;

    @Field(name = "provider_id")
    private User providerId;

    private LocalDateTime start;

    private LocalDateTime end;

    private AppointmentStatusEnum status;

    private AppointmentTypeEnum type;

    public Appointment() {
    }

    public Appointment(String id, Patient patientId, User providerId, LocalDateTime start, LocalDateTime end, AppointmentStatusEnum status, AppointmentTypeEnum type) {
        this.id = id;
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

    public Patient getPatientId() {
        return patientId;
    }

    public void setPatientId(Patient patientId) {
        this.patientId = patientId;
    }

    public User getProviderId() {
        return providerId;
    }

    public void setProviderId(User providerId) {
        this.providerId = providerId;
    }

    public LocalDateTime getStart() {
        return start;
    }

    public void setStart(LocalDateTime start) {
        this.start = start;
    }

    public LocalDateTime getEnd() {
        return end;
    }

    public void setEnd(LocalDateTime end) {
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
}
