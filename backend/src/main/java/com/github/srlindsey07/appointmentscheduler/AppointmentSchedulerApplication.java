package com.github.srlindsey07.appointmentscheduler;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.github.srlindsey07.appointmentscheduler.repository")
public class AppointmentSchedulerApplication {
	@Value("${cors.allowed}")
	String allowedOrigins;

	public static void main(String[] args) {
		SpringApplication.run(AppointmentSchedulerApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/api/**")
						.allowedOrigins(allowedOrigins);
			}
		};
	}

}