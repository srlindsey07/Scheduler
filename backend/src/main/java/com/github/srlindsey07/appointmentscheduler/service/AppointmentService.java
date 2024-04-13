package com.github.srlindsey07.appointmentscheduler.service;

import com.github.srlindsey07.appointmentscheduler.model.Appointment;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Map;

@Service
public class AppointmentService {

    @Autowired
    MongoOperations mongoTemplate;

    private static <T> T getParam(Map<String, String> map, String key) {
        return (map.containsKey(key)) ? (T) map.get(key) : null;
    }

    public Appointment findById(String id) {
        return mongoTemplate.findById(id, Appointment.class);
    }

    public List<Appointment> search(ZonedDateTime startDate, ZonedDateTime endDate, String providerId, String patientId) {
        // Change to UTC TZ, then convert to LocalDateTime
        ZoneId zone = ZoneId.of("UTC");
        LocalDateTime start = startDate.withZoneSameInstant(zone).toLocalDateTime();
        LocalDateTime end = endDate.withZoneSameInstant(zone).toLocalDateTime();

        Criteria criteria = Criteria.where("start").gte(start).lte(end);

        if (providerId != null) {
            criteria.and("providerId").is(providerId);
        }

        if (patientId != null) {
            criteria.and("patientId").is(patientId);
        }

        return mongoTemplate.find(new Query(criteria), Appointment.class);
    }

    public String create(Appointment appointment) {
        Appointment result = mongoTemplate.insert(appointment, "appointments");
        return result.getId();
    }

    public UpdateResult update(Appointment appointment) {
        Query query = new Query(Criteria.where("id").is(appointment.getId()));
        Update updateDefinition = new Update();
        updateDefinition.set("patientId", appointment.getPatientId())
                .set("providerId", appointment.getProviderId())
                .set("start", appointment.getStart().toString()) // convert dates to string so DB doesn't try to convert to UTC again
                .set("end", appointment.getEnd().toString())
                .set("status", appointment.getStatus())
                .set("type", appointment.getType());

        return mongoTemplate.updateFirst(query, updateDefinition, Appointment.class);
    }
}
