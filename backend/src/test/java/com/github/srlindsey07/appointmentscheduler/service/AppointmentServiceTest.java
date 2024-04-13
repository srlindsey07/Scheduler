package com.github.srlindsey07.appointmentscheduler.service;

import com.github.srlindsey07.appointmentscheduler.model.Appointment;
import com.github.srlindsey07.appointmentscheduler.utils.MockData;
import org.bson.types.ObjectId;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.ZonedDateTime;

@DataMongoTest()
@ExtendWith(SpringExtension.class)
@ActiveProfiles("test")
class AppointmentServiceTest {

    @Autowired
    private MongoOperations mongoTemplate;

    @MockBean
    private AppointmentService appointmentService;

    MockData mockData = new MockData();

    @BeforeEach
    void beforeEach() {
        if (!mongoTemplate.collectionExists("test")) {
            mongoTemplate.createCollection("test");
        }
    }

    @Test
    void testDb() {
        System.out.println(mongoTemplate.getCollectionNames());
        Assertions.assertNotEquals(0, mongoTemplate.getCollectionNames().size());
    }

    @Nested
    @DisplayName("Find appointment by ID")
    @Disabled
    class findAppointmentById {
        ZonedDateTime startDate = ZonedDateTime.now();
        ZonedDateTime endDate = ZonedDateTime.now().plusDays(7);

        @Test
        @DisplayName("GIVEN appointments exist "
                + "WHEN searching by date range "
                + "THEN appointments are returned")
        void findById_found() {
            Assertions.assertTrue(mongoTemplate.collectionExists(Appointment.class));
            // insert test data
            ZonedDateTime inRange = ZonedDateTime.now().plusDays(1);
            Appointment expectedAppt = mockData.createAppointment();
            expectedAppt.setStart(inRange);
            mongoTemplate.insert(expectedAppt);

            ZonedDateTime afterRange = ZonedDateTime.now().plusDays(8);
            Appointment afterRangeAppt = mockData.createAppointment();
            expectedAppt.setStart(afterRange);
            mongoTemplate.insert(afterRangeAppt);

            ZonedDateTime beforeRange = ZonedDateTime.now().minusDays(1);
            Appointment beforeRangeAppt = mockData.createAppointment();
            beforeRangeAppt.setStart(beforeRange);
            mongoTemplate.insert(beforeRangeAppt);

            Appointment test = mongoTemplate.findById(expectedAppt.getId(), Appointment.class);
            Assertions.assertEquals(expectedAppt, test);
//
//            // test
//            List<Appointment> actual = appointmentService.search(startDate, endDate, null, null);
//            Assertions.assertEquals(actual.size(), 1);
//            Assertions.assertEquals(actual, Arrays.asList(expectedAppt));
        }

        @Test
        @DisplayName("should return null if appointment not found")
        void findById_notFound() {
            Appointment expected = null;
            Appointment actual = appointmentService.findById(ObjectId.get().toString());

            Assertions.assertNull(actual);
        }
    }

    @Nested
    @DisplayName("Search for appointments")
    class searchForAppointments {
        ZonedDateTime startDate = ZonedDateTime.now();
        ZonedDateTime endDate = startDate.plusDays(7);

        @Test
        @DisplayName("should return appointments if given start and end dates")
        @Disabled void searchByDate_found() {

        }
    }
}