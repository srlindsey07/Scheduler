package com.github.srlindsey07.appointmentscheduler.config;

//import com.github.srlindsey07.appointmentscheduler.converters.AppointmentToDocumentConverter;
//import com.github.srlindsey07.appointmentscheduler.converters.DocumentToAppointmentConverter;
import com.github.srlindsey07.appointmentscheduler.converters.ZonedDateTimeReadConverter;
import com.github.srlindsey07.appointmentscheduler.converters.ZonedDateTimeWriteConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.core.convert.MongoCustomConversions;

import static java.util.Arrays.asList;

@Configuration
public class MongoConfig extends AbstractMongoClientConfiguration {

    @Value("${spring.data.mongodb.database}")
    private String database;

    @Override
    protected String getDatabaseName() {
        return database;
    }

    @Bean
    public MongoCustomConversions customConversions() {
        return new MongoCustomConversions(asList(
                new ZonedDateTimeReadConverter(),
                new ZonedDateTimeWriteConverter()
        ));
    }
}
