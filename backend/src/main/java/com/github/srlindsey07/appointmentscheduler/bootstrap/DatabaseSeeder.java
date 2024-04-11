package com.github.srlindsey07.appointmentscheduler.bootstrap;

import com.github.srlindsey07.appointmentscheduler.model.Appointment;
import com.github.srlindsey07.appointmentscheduler.model.Patient;
import com.github.srlindsey07.appointmentscheduler.model.SeedingData;
import com.github.srlindsey07.appointmentscheduler.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DatabaseSeeder implements ApplicationListener<ContextRefreshedEvent> {
    @Autowired
    MongoOperations mongoTemplate;

    private DatabaseData databaseData;

    Logger logger = LoggerFactory.getLogger(DatabaseSeeder.class);

    public DatabaseSeeder(DatabaseData databaseData) { this.databaseData = databaseData; }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        SeedingData<List<Appointment>> appointmentsData;
        SeedingData<List<Patient>> patientsData;
        SeedingData<List<User>> usersData;

        // Drop collections
        mongoTemplate.dropCollection(Patient.class);
        mongoTemplate.dropCollection(User.class);
        mongoTemplate.dropCollection(Appointment.class);

        try {
            patientsData = databaseData.createPatientData(30);
            mongoTemplate.insert(patientsData.getData(), Patient.class);

            usersData = databaseData.createUserData(6, 3, 1);
            mongoTemplate.insert(usersData.getData(), User.class);

            appointmentsData = databaseData.createAppointmentData(logger,100, patientsData.getIds(), usersData.getIds());
            mongoTemplate.insert(appointmentsData.getData(), Appointment.class);
        } catch (Exception e) {
            logger.error("There was an error seeding the database: ", e);
        }
    }
}
