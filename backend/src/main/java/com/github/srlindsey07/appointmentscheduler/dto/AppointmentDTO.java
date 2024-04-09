package com.github.srlindsey07.appointmentscheduler.dto;

import com.github.srlindsey07.appointmentscheduler.model.AppointmentStatus;
import com.github.srlindsey07.appointmentscheduler.model.AppointmentType;

import java.time.ZonedDateTime;

public class AppointmentDTO {
    private String id;

    private String patientId;

    private String patientShortName;

    private String providerId;

    private ZonedDateTime start;

    private ZonedDateTime end;

    private AppointmentStatus status;

    private AppointmentType type;

    public AppointmentDTO() {
    }

    public AppointmentDTO(String id, String patientId, String patientShortName, String providerId, ZonedDateTime start, ZonedDateTime end, AppointmentStatus status, AppointmentType type) {
        this.id = id;
        this.patientId = patientId;
        this.patientShortName = patientShortName;
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

    public String getPatientShortName() {
        return patientShortName;
    }

    public void setPatientShortName(String patientShortName) {
        this.patientShortName = patientShortName;
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
        return "AppointmentDTO{" +
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
