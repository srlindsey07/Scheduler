package com.github.srlindsey07.appointmentscheduler.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "users")
public class User {

    @MongoId(FieldType.OBJECT_ID)
    private String id;

    private Name name;

    private UserRole role;

    private ContactInfo contact;

    public User() {
    }

    public User(Name name, UserRole role, ContactInfo contact) {
        this.name = name;
        this.role = role;
        this.contact = contact;
    }

    public User(String id, Name name, UserRole role, ContactInfo contact) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.contact = contact;
    }

    public String getId() {
        return id;
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

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    public ContactInfo getContact() {
        return contact;
    }

    public void setContact(ContactInfo contactInfo) {
        this.contact = contactInfo;
    }
}
