package com.github.srlindsey07.appointmentscheduler.dto;

import com.github.srlindsey07.appointmentscheduler.model.AppointmentStatusEnum;
import com.github.srlindsey07.appointmentscheduler.model.AppointmentTypeEnum;

import java.time.LocalDateTime;

public class AppointmentDTO {

    private String id;

    private String patientId;

    private String providerId;

    private LocalDateTime start;

    private LocalDateTime end;

    private AppointmentStatusEnum status;

    private AppointmentTypeEnum type;

    public AppointmentDTO() {
    }

    public AppointmentDTO(String id, String patientId, String providerId, LocalDateTime start, LocalDateTime end, AppointmentStatusEnum status, AppointmentTypeEnum type) {
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
