package com.github.srlindsey07.appointmentscheduler.converters;

//@Component
//@ReadingConverter
//public class DocumentToAppointmentConverter implements Converter<Document, Appointment> {
//
//    @Override
//    public Appointment convert(@Nullable Document document) {
//        if (document == null) return null;
//
//        ZoneId zone = ZoneId.of("UTC");
//        Instant start = document.getDate("start").toInstant();
//        Instant end = document.getDate("end").toInstant();
//
//        Appointment appointment = new Appointment();
//        appointment.setId(document.getObjectId("_id").toString());
//        appointment.setPatientId(document.getObjectId("patientId").toString());
//        appointment.setProviderId(document.getObjectId("providerId").toString());
//        appointment.setStatus(AppointmentStatusEnum.valueOf(document.getString("status")));
//        appointment.setType(AppointmentTypeEnum.valueOf(document.getString("type")));
//        appointment.setStart(ZonedDateTime.ofInstant(start, zone));
//        appointment.setEnd(ZonedDateTime.ofInstant(end, zone));
//        return appointment;
//    }
//}
