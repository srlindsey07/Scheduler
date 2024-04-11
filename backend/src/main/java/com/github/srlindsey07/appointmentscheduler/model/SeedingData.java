package com.github.srlindsey07.appointmentscheduler.model;

import java.util.List;

public class SeedingData <K> {
    private K data;

    private List<String> ids;

    public SeedingData(K data, List<String> ids) {
        this.data = data;
        this.ids = ids;
    }

    public K getData() {
        return data;
    }

    public void setData(K data) {
        this.data = data;
    }

    public List<String> getIds() {
        return ids;
    }

    public void setIds(List<String> ids) {
        this.ids = ids;
    }
}
