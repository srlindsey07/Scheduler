package com.github.srlindsey07.appointmentscheduler.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "patients")
public class Patient {

    @Id
    private String id;

    // create name class
    private Object name;

    // create contact class
    private Object contact;
}
