package com.github.srlindsey07.appointmentscheduler.controller;

import com.github.javafaker.Faker;
import com.github.srlindsey07.appointmentscheduler.dto.AppointmentDTO;
import com.github.srlindsey07.appointmentscheduler.model.Appointment;
import com.github.srlindsey07.appointmentscheduler.service.AppointmentService;
import com.github.srlindsey07.appointmentscheduler.utils.AppointmentMapper;
import com.github.srlindsey07.appointmentscheduler.utils.MockData;
import org.bson.types.ObjectId;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(AppointmentController.class)
@ActiveProfiles("test")
public class AppointmentControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    AppointmentService appointmentService;

    @MockBean
    AppointmentMapper appointmentMapper;

    static MockData mockData = new MockData();

    Faker faker = new Faker();

    private static final String api = "/api/appointments";

    @AfterEach
    void tearDown() {
    }

    @Nested
    @DisplayName("GET " + api + "/{id}")
    class getAppointmentsByIdTests {
        @Test
        @DisplayName("should return appointment if found")
        void getById_found() throws Exception {
            Appointment expected = mockData.createAppointment();
            String apptId = expected.getId();

            when(appointmentService.findById(apptId)).thenReturn(expected);

            mockMvc.perform(MockMvcRequestBuilders.get(api + "/" + apptId))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.id").value(expected.getId()));
        }

        @Test
        @DisplayName("should return not found status if appointment not found")
        void getById_notFound() throws Exception {
            String mockId = ObjectId.get().toString();

            when(appointmentService.findById(mockId)).thenReturn(null);

            mockMvc.perform(MockMvcRequestBuilders.get(api + "/" + mockId))
                    .andExpect(status().isNotFound());
        }
    }

    @Nested
    @DisplayName("GET " + api)
    class searchAppointmentTests {
        ZonedDateTime start = ZonedDateTime.now();
        ZonedDateTime end = start.plusDays(1);
        Appointment appt1;
        Appointment appt2;
        List<Appointment> serviceResult;
        List<AppointmentDTO> expected;

        @BeforeEach
        void beforeAll() {

        }

        @Test
        @DisplayName("should return appointments if found")
        void search_found() throws Exception {
            appt1 = mockData.createAppointment();
            appt2 = mockData.createAppointment();
            serviceResult = Arrays.asList(appt1, appt2);
            expected = serviceResult
                    .stream()
                    .map(mockData::convertToAppointmentDTO)
                    .toList();

            when(appointmentService.search(start, end, null, null)).thenReturn(serviceResult);
            when(appointmentMapper.toDTO(appt1)).thenReturn(expected.getFirst());
            when(appointmentMapper.toDTO(appt2)).thenReturn(expected.get(1));

            mockMvc.perform(MockMvcRequestBuilders
                            .get("/api/appointments")
                            .accept(MediaType.APPLICATION_JSON)
                            .param("startDate", start.toString())
                            .param("endDate", end.toString()))
                    .andDo(print())
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.length()").value(expected.size()))
                    .andExpect(jsonPath("$[0].id").value(expected.getFirst().getId()))
                    .andExpect(jsonPath("$[1].id").value(expected.get(1).getId()));
        }

        @Test
        @DisplayName("should return no content status if no appointments are found")
        void search_notFound() throws Exception {
            when(appointmentService.search(start, end, null, null)).thenReturn(new ArrayList<>());

            mockMvc.perform(MockMvcRequestBuilders
                            .get("/api/appointments")
                            .accept(MediaType.APPLICATION_JSON)
                            .param("startDate", start.toString())
                            .param("endDate", end.toString()))
                    .andDo(print())
                    .andExpect(status().isNoContent());
        }
    }

    @Test
    @DisplayName("POST " + api)
    @Disabled void createAppointment() {
    }

    @Test
    @DisplayName("PUT " + api + "/{id}")
    @Disabled void updateAppointment() {
    }

}

