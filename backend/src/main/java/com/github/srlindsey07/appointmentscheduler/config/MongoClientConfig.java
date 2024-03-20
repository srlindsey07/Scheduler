package com.github.srlindsey07.appointmentscheduler.config;

import com.github.srlindsey07.appointmentscheduler.converters.AppointmentConverter;
import com.mongodb.client.ListDatabasesIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.mongodb.MongoDatabaseFactory;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;
import org.springframework.data.mongodb.core.convert.MongoCustomConversions;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class MongoClientConfig extends AbstractMongoClientConfiguration {

    @Value("${spring.data.mongodb.uri}")
    private String uri;

    @Value("${spring.data.mongodb.database}")
    private String db;



    protected String getDatabaseName() {
        return db;
    }

    @Override
    public MongoClient mongoClient() {
        return MongoClients.create(uri);
    }

    @Override
    public MongoCustomConversions customConversions() {
        final List<Converter<?, ?>> converters = new ArrayList<Converter<?, ?>>();
        converters.add(new AppointmentConverter());
        return new MongoCustomConversions(converters);
    }
}
