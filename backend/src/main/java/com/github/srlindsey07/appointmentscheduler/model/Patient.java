package com.github.srlindsey07.appointmentscheduler.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "patients")
public class Patient {

    @MongoId(FieldType.OBJECT_ID)
    private String id;

    private Name name;

    private ContactInfo contact;

    public String getId() {
        return id;
    }

    public Patient() {
    }

    public Patient(String id) {
        this.id = id;
    }

    public Patient(String id, Name name, ContactInfo contact) {
        this.id = id;
        this.name = name;
        this.contact = contact;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Name getName() {
        return name;
    }

    public void setName(Name name) {
        this.name = name;
    }

    public ContactInfo getContact() {
        return contact;
    }

    public void setContact(ContactInfo contact) {
        this.contact = contact;
    }
}
