package com.github.srlindsey07.appointmentscheduler.converters;

import com.github.srlindsey07.appointmentscheduler.dto.AppointmentDTO;
import com.github.srlindsey07.appointmentscheduler.model.*;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.convert.ReadingConverter;
import org.springframework.data.convert.WritingConverter;

import java.time.LocalDateTime;

//@ReadingConverter
//public class AppointmentConverter implements Converter<Document, Appointment> {
//    public Appointment convert(Document document) {
//        Appointment appointment = new Appointment(document.get("_id").toString(), document.get("provider_id").toString(), (User) document.get("provider_id"), (LocalDateTime) document.get("start"), (LocalDateTime) document.get("end"), (AppointmentStatusEnum) document.get("status"), (AppointmentTypeEnum) document.get("type"));
//        return appointment;
//    }
//}

@WritingConverter
public class AppointmentConverter implements Converter<AppointmentDTO, Document> {
    public Document convert(AppointmentDTO appointment) {
        Document document = new Document();
        document.put("patient_id", ObjectId(appointment.getPatientId()));
        document.put()
    }
}
