package com.github.srlindsey07.appointmentscheduler.controller;

import com.github.srlindsey07.appointmentscheduler.dto.AppointmentDTO;
import com.github.srlindsey07.appointmentscheduler.model.Appointment;
import com.github.srlindsey07.appointmentscheduler.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    AppointmentRepository appointmentRepository;

    @Autowired
    MongoTemplate mongoTemplate;

    // TODO: Move queries and .find() to a service
    @GetMapping()
    public List<Appointment> getAppointments() {

//        return appointmentRepository.findAll();
        return mongoTemplate.findAll(Appointment.class);
    }

    @GetMapping("/{id}")
    public Appointment getById(@PathVariable("id") String id) {
        return mongoTemplate.findById(id, Appointment.class);
    }

    @GetMapping("/test")
    public List<Appointment> getTest() {
        Query query = new Query(Criteria.where("type").is("OFFICE_VISIT"));
        return mongoTemplate.find(query, Appointment.class);
    }

//    @PostMapping()
//    public Appointment createAppointment(@RequestBody AppointmentDTO appointment) {
//        // https://medium.com/@vishamberlal/understanding-data-transfer-objects-dto-in-spring-boot-ac06b575a1d5#:~:text=In%20a%20Spring%20Boot%20application,overall%20modularity%20of%20the%20codebase.
//        // create new Appointment() with data
//        // in the service:
//        // convert from DTO to Appointment
//        // mongoTemplate.save()
//
//        // also look at MongerCoverter, that might be the best way
//    }
}
