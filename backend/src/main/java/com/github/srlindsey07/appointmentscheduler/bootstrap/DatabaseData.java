package com.github.srlindsey07.appointmentscheduler.bootstrap;

import com.github.javafaker.Faker;
import com.github.srlindsey07.appointmentscheduler.model.*;
import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;
import java.util.*;

@Component
public class DatabaseData {

    Faker faker = new Faker();

    public SeedingData<List<Appointment>> createAppointmentData(Logger logger, int amountNeeded, List<String> patientIds, List<String> providerIds) {
        int created = 0;
        List<Appointment> appointments = new ArrayList<>();
        List<String> ids = new ArrayList<>();
        Random random = new Random();
        ZonedDateTime listRangeStart = ZonedDateTime.now().minusWeeks(2);
        ZonedDateTime listRangeEnd = ZonedDateTime.now().plusWeeks(2);
        ZonedDateTime hourStart = ZonedDateTime.now().withHour(8).withMinute(0);
        ZonedDateTime hourEnd = ZonedDateTime.now().withHour(17).withMinute(0);
        List<Integer> apptLengths = Arrays.asList(15, 30, 45, 60);

        while (created < amountNeeded) {
            Appointment appointment = new Appointment();
            String id = new ObjectId().toString();
            String randomPatientId = patientIds.get(random.nextInt(patientIds.size()));
            String randomProviderId = providerIds.get(random.nextInt(providerIds.size()));
            AppointmentStatus randomStatus = AppointmentStatus.values()[random.nextInt(AppointmentStatus.values().length)];
            AppointmentType randomType = AppointmentType.values()[random.nextInt(AppointmentType.values().length)];
            ZonedDateTime apptDate = getRandomDateFromRange(faker, random, listRangeStart, listRangeEnd, hourStart, hourEnd);

            appointment.setId(id);
            appointment.setPatientId(new Patient(randomPatientId));
            appointment.setProviderId(randomProviderId);
            appointment.setStatus(randomStatus);
            appointment.setType(randomType);
            appointment.setStart(apptDate);
            appointment.setEnd(apptDate.plusMinutes(apptLengths.get(faker.number().numberBetween(1, apptLengths.size()))));

            appointments.add(appointment);
            ids.add(id);

            created++;
        }

        return new SeedingData<List<Appointment>>(appointments, ids);
    }

    public SeedingData<List<Patient>> createPatientData(int amountNeeded) {
        List<Patient> patients = new ArrayList<Patient>();
        List<String> ids = new ArrayList<String>();
        int created = 0;

        while (created <= amountNeeded) {
            Patient patient = new Patient();
            String objectId = new ObjectId().toString();
            patient.setId(objectId);
            patient.setName(new Name(faker.name().firstName(), faker.name().lastName()));
            patient.setContact(new ContactInfo(faker.internet().emailAddress(), faker.phoneNumber().phoneNumber()));
            patients.add(patient);
            ids.add(objectId);

            created++;
        }

        return new SeedingData<>(patients, ids);
    }

    public SeedingData<List<User>> createUserData(int numProviders, int numSchedulers, int numAdmin) {
        List<User> users = new ArrayList<User>();
        List<String> ids = new ArrayList<String>();
        int created = 0;

//      create providers
        while (created < numProviders) {
            User user = createUser(UserRole.PROVIDER);
            users.add(user);
            ids.add(user.getId());

            created++;
        }
        created = 0;

//      create schedulers
        while (created < numSchedulers) {
            User user = createUser(UserRole.SCHEDULER);
            users.add(user);

            created++;
        }
        created = 0;

//      create admin
        while (created < numAdmin) {
            User user = createUser(UserRole.ADMIN);
            users.add(user);

            created++;
        }

        return new SeedingData<>(users, ids);
    }

    private User createUser(UserRole role) {
        User user = new User();
        String id = new ObjectId().toString();
        user.setId(id);
        user.setName(new Name(faker.name().firstName(), faker.name().lastName()));
        user.setContact(new ContactInfo(faker.internet().emailAddress(), faker.phoneNumber().phoneNumber()));
        user.setRole(role);

        return user;
    }

    private ZonedDateTime getRandomDateFromRange(Faker faker, Random random, ZonedDateTime dateRangeStart, ZonedDateTime dateRangeEnd, ZonedDateTime hourStart, ZonedDateTime hourEnd) {
        List<Integer> startMins = Arrays.asList(0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55);
        Date d = faker.date().between(Date.from(dateRangeStart.toInstant()), Date.from(dateRangeEnd.toInstant()));
        int hour = faker.number().numberBetween(hourStart.getHour(), hourEnd.getHour());
        int min = startMins.get(hour == 5 ? 0 : random.nextInt(startMins.size()));

        Calendar date = Calendar.getInstance();
        date.setTime(d);

        return ZonedDateTime.of(date.get(Calendar.YEAR), date.get(Calendar.MONTH) + 1, date.get(Calendar.DAY_OF_MONTH), hour, min, 0, 0, hourStart.getZone());
    }
}
