package com.github.srlindsey07.appointmentscheduler.utils;

import com.github.javafaker.Faker;
import com.github.srlindsey07.appointmentscheduler.model.*;
import org.bson.types.ObjectId;

import java.time.Instant;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.concurrent.TimeUnit;

public class MockData {

    Faker faker = new Faker();

    public Appointment createAppointment() {
        AppointmentStatus randomStatus = AppointmentStatus.values()[faker.number().numberBetween(1, AppointmentStatus.values().length)];
        AppointmentType randomType = AppointmentType.values()[faker.number().numberBetween(1, AppointmentType.values().length)];
        Instant randomDate = faker.date().future(365, TimeUnit.DAYS).toInstant();
        ZonedDateTime start = ZonedDateTime.ofInstant(randomDate, ZoneOffset.UTC);
        ZonedDateTime end = start.plusMinutes(30);

        Appointment appointment = new Appointment();
        appointment.setId(new ObjectId().toString());
        appointment.setPatientId(new Patient(new ObjectId().toString()));
        appointment.setProviderId(new ObjectId().toString());
        appointment.setStatus(randomStatus);
        appointment.setType(randomType);
        appointment.setStart(start);
        appointment.setEnd(end);

        return appointment;
    }
}
