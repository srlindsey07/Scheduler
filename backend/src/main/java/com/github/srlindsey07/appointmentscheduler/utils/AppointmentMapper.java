package com.github.srlindsey07.appointmentscheduler.utils;

import com.github.srlindsey07.appointmentscheduler.dto.AppointmentDTO;
import com.github.srlindsey07.appointmentscheduler.model.*;
import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;

@Component
public class AppointmentMapper {
    public AppointmentDTO toDTO(Appointment appointment) {
        String id = appointment.getId();
        String patientId = appointment.getPatientId().getId();
        String patientShortName = appointment.getPatientId().getName().getShortName();
        String providerId = appointment.getProviderId();
        ZonedDateTime start = appointment.getStart();
        ZonedDateTime end = appointment.getEnd();
        AppointmentStatus status = appointment.getStatus();
        AppointmentType type = appointment.getType();

        return new AppointmentDTO(id, patientId, patientShortName, providerId, start, end, status, type);
    }

    public Appointment toAppointment(AppointmentDTO dto) {
        Patient patient = new Patient(dto.getPatientId());
        String providerId = dto.getProviderId();
        ZonedDateTime start = dto.getStart();
        ZonedDateTime end = dto.getEnd();
        AppointmentStatus status = dto.getStatus();
        AppointmentType type = dto.getType();

        return new Appointment(patient, providerId, start, end, status, type);
    }
}
