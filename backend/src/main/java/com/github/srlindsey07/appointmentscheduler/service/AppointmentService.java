package com.github.srlindsey07.appointmentscheduler.service;

import com.github.srlindsey07.appointmentscheduler.model.Appointment;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class AppointmentService {

    @Autowired
    MongoOperations mongoTemplate;

    static <T> T getParam(Map<String, String> map, String key) {
        return (map.containsKey(key)) ? (T) map.get(key) : null;
    }

    public Appointment findById(String id) {
        Appointment appointment = mongoTemplate.findById(id, Appointment.class);
        return appointment;
    }

    public List<Appointment> search(LocalDateTime startDate, LocalDateTime endDate, Map<String, String> parameters) {
        String providerId = getParam(parameters, "providerId");
        String patientId = getParam(parameters, "patientId");

        Criteria criteria = Criteria.where("start").gte(startDate).lte(endDate);

        if (providerId != null) {
            criteria.and("providerId").is(providerId);
        }

        if (patientId != null) {
            criteria.and("patientId").is(patientId);
        }

        return mongoTemplate.find(new Query(criteria), Appointment.class);
    }

    public String create(Appointment appointment) {
        Appointment _appointment = mongoTemplate.insert(appointment, "appointments");
        return _appointment.getId();
    }

    public UpdateResult update(Appointment appointment) {
        Query query = new Query(Criteria.where("id").is(appointment.getId()));
        Update updateDefinition = new Update()
                .set("patientId", appointment.getPatientId())
                .set("providerId", appointment.getProviderId())
                .set("start", appointment.getStart())
                .set("end", appointment.getEnd())
                .set("status", appointment.getStatus())
                .set("type", appointment.getType());

        return mongoTemplate.updateFirst(query, updateDefinition, Appointment.class);
    }
}
