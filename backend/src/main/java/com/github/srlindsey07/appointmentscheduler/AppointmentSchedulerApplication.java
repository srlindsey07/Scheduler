package com.github.srlindsey07.appointmentscheduler;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.github.srlindsey07.appointmentscheduler.repository")
public class AppointmentSchedulerApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppointmentSchedulerApplication.class, args);
	}

}