package com.github.srlindsey07.appointmentscheduler.repository;

import com.github.srlindsey07.appointmentscheduler.model.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, String> {



}
