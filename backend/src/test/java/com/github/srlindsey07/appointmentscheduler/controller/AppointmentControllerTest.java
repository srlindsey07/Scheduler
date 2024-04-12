package com.github.srlindsey07.appointmentscheduler.controller;

import com.github.javafaker.Faker;
import com.github.srlindsey07.appointmentscheduler.model.Appointment;
import com.github.srlindsey07.appointmentscheduler.service.AppointmentService;
import com.github.srlindsey07.appointmentscheduler.utils.MockData;
import org.bson.types.ObjectId;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(AppointmentController.class)
public class AppointmentControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    AppointmentService appointmentService;

    MockData mockData = new MockData();

    Faker faker = new Faker();

    private static final String api = "/api/appointments";

    @AfterEach
    void tearDown() {
    }

    @Test
    @DisplayName(api + "/{id} should return appointment if found")
    void getById_found() throws Exception {
        Appointment expected = mockData.createAppointment();
        String apptId = expected.getId();

        when(appointmentService.findById(apptId)).thenReturn(expected);

        mockMvc.perform(MockMvcRequestBuilders.get(api + "/" + apptId))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(expected.getId()));
    }

    @Test
    @DisplayName(api + "/{id} should return not found status if appointment not found")
    void getById_notFound() throws Exception {
        String mockId = ObjectId.get().toString();

        when(appointmentService.findById(mockId)).thenReturn(null);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/appointments/" + mockId))
                .andExpect(status().isNotFound());
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

}