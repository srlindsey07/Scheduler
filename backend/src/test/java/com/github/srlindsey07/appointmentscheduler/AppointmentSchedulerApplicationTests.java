package com.github.srlindsey07.appointmentscheduler;

import com.github.srlindsey07.appointmentscheduler.controller.AppointmentController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@ContextConfiguration(classes = AppointmentSchedulerApplication.class)
@SpringBootTest
@ActiveProfiles("test")
class AppointmentSchedulerApplicationTests {

	@Autowired
	private AppointmentController appointmentController;

	@Test
	void contextLoads() throws Exception {
		assertNotNull(appointmentController);
	}

}
