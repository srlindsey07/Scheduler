package com.github.srlindsey07.appointmentscheduler.bootstrap;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.srlindsey07.appointmentscheduler.model.Appointment;
import com.github.srlindsey07.appointmentscheduler.model.Patient;
import com.github.srlindsey07.appointmentscheduler.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class DatabaseSeeder implements ApplicationListener<ContextRefreshedEvent> {
    @Autowired
    MongoOperations mongoTemplate;

    Logger logger = LoggerFactory.getLogger(DatabaseSeeder.class);

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        List<Appointment> appointmentsData = new ArrayList<>();
        List<Patient> patientsData = new ArrayList<>();
        List<User> usersData = new ArrayList<>();
        ObjectMapper objectMapper = new ObjectMapper().findAndRegisterModules();

        // Drop collections
        mongoTemplate.dropCollection(Patient.class);
        mongoTemplate.dropCollection(User.class);
        mongoTemplate.dropCollection(Appointment.class);

        try {
            appointmentsData = objectMapper.readValue(new File("src/main/resources/data/appointments.json"), new TypeReference<List<Appointment>>() {});
            patientsData = objectMapper.readValue(new File("src/main/resources/data/patients.json"), new TypeReference<List<Patient>>() {});
            usersData = objectMapper.readValue(new File("src/main/resources/data/users.json"), new TypeReference<List<User>>() {});
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        mongoTemplate.insert(patientsData, Patient.class);
        mongoTemplate.insert(usersData, User.class);
        mongoTemplate.insert(appointmentsData, Appointment.class);
    }
}
