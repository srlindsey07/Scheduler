package com.github.srlindsey07.appointmentscheduler.converters;

import com.github.srlindsey07.appointmentscheduler.model.Appointment;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.convert.WritingConverter;
import org.springframework.stereotype.Component;

import java.time.ZoneId;

//@Component
//@WritingConverter
//public class AppointmentToDocumentConverter implements Converter<Appointment, Document> {
//
//    @Override
//    public Document convert(Appointment appointment) {
//        Document document = new Document();
//
//        if (appointment.getId() != null) {
//            document.put("_id", new ObjectId(appointment.getId()));
//        }
//
//        document.put("patientId", new ObjectId(appointment.getPatientId()));
//        document.put("providerId", new ObjectId(appointment.getProviderId()));
//        document.put("status", appointment.getStatus());
//        document.put("type", appointment.getType());
//        document.put("start", appointment.getStart().toLocalDateTime());
//        document.put("end", appointment.getEnd().toLocalDateTime());
//
//        return document;
//    }
//}
