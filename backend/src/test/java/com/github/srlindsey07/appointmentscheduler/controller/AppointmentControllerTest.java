package com.github.srlindsey07.appointmentscheduler.controller;

import com.github.javafaker.Faker;
import com.github.srlindsey07.appointmentscheduler.model.Appointment;
import com.github.srlindsey07.appointmentscheduler.model.AppointmentStatusEnum;
import com.github.srlindsey07.appointmentscheduler.model.AppointmentTypeEnum;
import com.github.srlindsey07.appointmentscheduler.service.AppointmentService;
import org.bson.types.ObjectId;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.junit.jupiter.api.Assertions.*;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;

import java.time.temporal.ChronoUnit;
import java.util.concurrent.TimeUnit;


@SpringBootTest
@AutoConfigureMockMvc
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
    void getById() throws Exception {
        String appointmentId = new ObjectId().toString();
        String providerId = new ObjectId().toString();
        String patientId = new ObjectId().toString();
        LocalDateTime start = faker.date().future(365, TimeUnit.DAYS)
                .toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDateTime()
                .truncatedTo(ChronoUnit.SECONDS);
        LocalDateTime end = start.plusMinutes(30);
        AppointmentStatusEnum status = AppointmentStatusEnum.values()[faker.random().nextInt(0, AppointmentStatusEnum.values().length - 1)];
        AppointmentTypeEnum type = AppointmentTypeEnum.values()[faker.random().nextInt(0, AppointmentTypeEnum.values().length - 1)];
        Appointment expected = getAppointmentResponse(appointmentId, providerId, patientId, start, end, status, type);

        when(appointmentService.findById(appointmentId)).thenReturn(expected);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/appointments/" + appointmentId))
               .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(appointmentId))
                .andExpect(jsonPath("$.patientId").value(patientId))
                .andExpect(jsonPath("$.providerId").value(providerId))
                .andExpect(jsonPath("$.start").value(start))
                .andExpect(jsonPath("$.end").value(end))
                .andExpect(jsonPath("$.status").value(status))
                .andExpect(jsonPath("$.type").value(type));
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

    private Appointment getAppointmentResponse(String id, String providerId, String patientId, LocalDateTime start, LocalDateTime end, AppointmentStatusEnum status, AppointmentTypeEnum type) {
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