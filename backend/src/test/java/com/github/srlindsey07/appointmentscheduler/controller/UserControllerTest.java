package com.github.srlindsey07.appointmentscheduler.controller;

import com.github.srlindsey07.appointmentscheduler.service.AppointmentService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.mock.mockito.MockBean;

class UserControllerTest {
    @MockBean
    AppointmentService appointmentService;

    private static final String api = "/api/users";
    @Test
    @DisplayName("GET " + api + " should return users ")
    void getByRole_found() {
    }
}