package com.github.srlindsey07.appointmentscheduler.controller;

import com.github.srlindsey07.appointmentscheduler.model.Appointment;
import com.github.srlindsey07.appointmentscheduler.service.AppointmentService;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    AppointmentService appointmentService;

    /**
     * Get appointments by ID.
     *
     * @param id  Appointment ID
     * @return One appointment. Appointment times are UTC.
     */
    @GetMapping(value = "/{id}",
            produces = {"application/json", "application/xml"})
    public ResponseEntity<Appointment> getById(@PathVariable("id") String id) {
        try {
            Appointment appointment = appointmentService.findById(id);

            if (appointment == null) {
                return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(appointment, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Get appointments by date range, provider ID and patient ID.
     *
     * @param startDate  Required. 2024-03-01T00:00:00-04:00 format.
     * @param endDate  Required. 2024-03-01T00:00:00-04:00 format.
     * @param providerId
     * @param patientId
     * @return List of appointments. Appointment times are UTC.
     */
    @GetMapping(value = "",
            produces = {"application/json", "application/xml"})
    public ResponseEntity<List<Appointment>> searchAppointments(
            @RequestParam(value = "startDate") ZonedDateTime startDate,
            @RequestParam(value = "endDate") ZonedDateTime endDate,
            @RequestParam(value = "providerId", required = false) String providerId,
            @RequestParam(value = "patientId", required = false) String patientId) {
        try {
            Map<String, String> parameters = new HashMap<String, String>();
            parameters.put("providerId", providerId);
            parameters.put("patientId", patientId);

            List<Appointment> appointments = appointmentService.search(startDate, endDate, parameters);

            if (appointments.isEmpty()) {
                return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(appointments, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Create new appointment. Dates in appointment with TZ info are automatically converted to UTC.
     *
     * @param appointment  Required. Appointment details. Expected date format: 2024-03-01T00:00:00-04:00.
     * @return The created appointment ID.
     */
    // TODO: Send back location header?
    @PostMapping(value = "",
        consumes = {"application/json", "application/xml"},
        produces = {"application/json", "application/xml"})
    public ResponseEntity<String> createAppointment(@RequestBody Appointment appointment) {
        try {
            String newId = appointmentService.create(appointment);

            if (newId == null) {
                return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
            }

            return new ResponseEntity<>(newId, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Updates an existing appointment. Dates in appointment with TZ info are automatically converted to UTC.
     *
     * @param id  ID of the appointment to update.
     * @param appointment  New appointment details.
     * @return null
     */
    @PutMapping(value = "/{id}",
            consumes = {"application/json", "application/xml"},
            produces = {"application/json", "application/xml"})
    public ResponseEntity<String> updateAppointment(@PathVariable("id") String id, @RequestBody Appointment appointment) {
        try {
            appointment.setId(id);
            UpdateResult result = appointmentService.update(appointment);

            if (result.getMatchedCount() == 0) {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }

            return new ResponseEntity<>(null, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
