package com.github.srlindsey07.appointmentscheduler.model;

public class Name {
    private String first;

    private String last;

    public Name() {
    }

    public Name(String first, String last) {
        this.first = first;
        this.last = last;
    }

    public String getFirst() {
        return first;
    }

    public void setFirst(String first) {
        this.first = first;
    }

    public String getLast() {
        return last;
    }

    public void setLast(String last) {
        this.last = last;
    }

    @Override
    public String toString() {
        return "Name{" +
                "first='" + first + '\'' +
                ", last='" + last + '\'' +
                '}';
    }

    public String getFullName() {
        return this.getFirst() + " " + this.getLast();
    }

    public String getFullNameAlpha() {
        return this.getLast() + ", " + this.getFirst();
    }

    public String getShortName() {
        return this.getLast().substring(0, 3) + ", " + this.getFirst().charAt(0) + ".";
    }
}
