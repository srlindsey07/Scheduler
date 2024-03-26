package com.github.srlindsey07.appointmentscheduler.model;

public class ContactInfo {
    private String email;

    private String mobile;

    public ContactInfo() {
    }

    public ContactInfo(String email, String mobile) {
        this.email = email;
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    @Override
    public String toString() {
        return "ContactInfo{" +
                "email='" + email + '\'' +
                ", mobile='" + mobile + '\'' +
                '}';
    }
}
