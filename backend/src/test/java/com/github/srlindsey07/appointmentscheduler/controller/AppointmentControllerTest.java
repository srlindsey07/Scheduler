package com.github.srlindsey07.appointmentscheduler.controller;

import com.github.javafaker.Faker;
import com.github.srlindsey07.appointmentscheduler.model.Appointment;
import com.github.srlindsey07.appointmentscheduler.model.AppointmentStatusEnum;
import com.github.srlindsey07.appointmentscheduler.model.AppointmentTypeEnum;
import com.github.srlindsey07.appointmentscheduler.service.AppointmentService;
import org.bson.types.ObjectId;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.text.SimpleDateFormat;
import java.time.Instant;

import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.concurrent.TimeUnit;

@WebMvcTest(AppointmentController.class)
public class AppointmentControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    AppointmentService appointmentService;

    Faker faker = new Faker();
    SimpleDateFormat dateTimeFormatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");

    @AfterEach
    void tearDown() {
    }

    @Test
    @DisplayName("GET /appointments 200")
    void getById() throws Exception {
        String appointmentId = new ObjectId().toString();
        String providerId = new ObjectId().toString();
        String patientId = new ObjectId().toString();
        Instant randomDate = faker.date().future(365, TimeUnit.DAYS).toInstant();
        ZonedDateTime start = ZonedDateTime.ofInstant(randomDate, ZoneOffset.UTC);
        ZonedDateTime end = start.plusMinutes(30);
        AppointmentStatusEnum status = AppointmentStatusEnum.values()[faker.random().nextInt(0, AppointmentStatusEnum.values().length - 1)];
        AppointmentTypeEnum type = AppointmentTypeEnum.values()[faker.random().nextInt(0, AppointmentTypeEnum.values().length - 1)];

        Appointment expectedResponse = createAppointmentResponse(appointmentId, providerId, patientId, start, end, status, type);

        when(appointmentService.findById(appointmentId)).thenReturn(expectedResponse); // returns ZDT as expected but with extra data

        mockMvc.perform(MockMvcRequestBuilders.get("/api/appointments/" + appointmentId)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(expectedResponse.getId()))
                .andExpect(jsonPath("$.patientId").value(expectedResponse.getPatientId()))
                .andExpect(jsonPath("$.providerId").value(expectedResponse.getProviderId()))
                .andExpect(jsonPath("$.start").value(expectedResponse.getStart().toString())) // RETURNS UTC
                .andExpect(jsonPath("$.end").value(expectedResponse.getEnd().toString()))
                .andExpect(jsonPath("$.status").value(expectedResponse.getStatus().toString()))
                .andExpect(jsonPath("$.type").value(expectedResponse.getType().toString()));
    }

    @Test
    void searchAppointments() {
    }

    @Test
    void createAppointment() {
    }

    @Test
    void updateAppointment() {
    }

    private Appointment createAppointmentResponse(String id, String providerId, String patientId, ZonedDateTime start, ZonedDateTime end, AppointmentStatusEnum status, AppointmentTypeEnum type) {
        Appointment appointment = new Appointment();
        appointment.setId(id);
        appointment.setProviderId(providerId);
        appointment.setPatientId(patientId);
        appointment.setStart(start);
        appointment.setEnd(end);
        appointment.setStatus(status);
        appointment.setType(type);
        return appointment;
    }
}