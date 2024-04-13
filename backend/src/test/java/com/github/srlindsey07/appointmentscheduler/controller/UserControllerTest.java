package com.github.srlindsey07.appointmentscheduler.controller;

import com.github.srlindsey07.appointmentscheduler.model.User;
import com.github.srlindsey07.appointmentscheduler.model.UserRole;
import com.github.srlindsey07.appointmentscheduler.service.UserService;
import com.github.srlindsey07.appointmentscheduler.utils.MockData;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.*;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserController.class)
@ActiveProfiles("test")
public class UserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    UserService userService;

    MockData mockData = new MockData();

    private static final String api = "/api/users";

    @Nested
    @DisplayName("GET " + api)
    class getUsersByRole {
        List<UserRole> roles = Arrays.stream(UserRole.values()).toList();
        List<User> serviceResult;

        Map<String, String> roleParams = new HashMap<>();
        MockHttpServletRequestBuilder request = MockMvcRequestBuilders.get(api);

        @BeforeEach
        void beforeEach() {
            request = MockMvcRequestBuilders.get(api);
            for (UserRole role : roles) {
                request.param("role", role.toString());
            }
            serviceResult = new ArrayList<>();
        }

        @Test
        @DisplayName("should return users")
        void getByRole_found() throws Exception {
            int created = 0;
            int needed = 3;
            while (created < needed) {
                serviceResult.add(mockData.createUser());
                created++;
            }

            when(userService.getByRole(roles)).thenReturn(serviceResult);

            mockMvc.perform(request)
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.length()").value(needed));
        }

        @Test
        @DisplayName("should return not found status if no users are found")
        void getByRole_notFound() throws Exception {
            when(userService.getByRole(roles)).thenReturn(serviceResult);

            mockMvc.perform(request)
                    .andExpect(status().isNotFound());
        }
    }
}