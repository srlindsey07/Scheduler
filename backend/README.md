# Spring Boot MongoDB Project

This is a sample project that demonstrates my knowledge of various skills such as Spring Boot, REST APIs and database connection. The database will automatically reseed every time the application refreshes.

## Noteable Dependencies
* Java 21
* Spring Boot v3.2.3
* Maven
* Spring Data MongoDB
* Spring Web
* JUnit v5

## How to Run
* Clone this repository
* Start up your local MongoDB server on default port 27017
* Build the project
* Once built successfully, run the main method

## API Endpoints
```
BASE_URL = http://localhost:8081/api

Appointments
GET    /appointments/{id}
GET    /appointments
POST   /appointments
PUT    /appointments/{id}
```

### Appointments

#### Find appointment by ID
```dtd
GET /api/appointments/66005c73fc13ae7b3650fc46
Content-Type: application/json

RESPONSE: HTTP 200
{
    "id": "66005c73fc13ae7b3650fc46",
    "patientId": "65ff4b94fc13ae7bd250faaa",
    "providerId": "65ff4be0fc13ae7d2050faa2",
    "start": "2024-08-07T15:45:00",
    "end": "2024-08-07T16:15:00",
    "status": "CONFIRMED",
    "type": "FOLLOW_UP",
}
```

#### Search appointments
```dtd
GET /api/appointments?startDate=2024-08-07T15:45:00&endDate=2024-08-07T16:15:00&providerId=65ff4be0fc13ae7d2050faa2&patientId=65ff4b94fc13ae7bd250faaa
Content-Type: application/json

RESPONSE: HTTP 200
[
    {
    "id": "66005c73fc13ae7b3650fc46",
    "patientId": "65ff4b94fc13ae7bd250faaa",
    "providerId": "65ff4be0fc13ae7d2050faa2",
    "start": "2024-08-07T15:45:00",
    "end": "2024-08-07T16:15:00",
    "status": "CONFIRMED",
    "type": "FOLLOW_UP",
    },
    ...
]
```

#### Create an appointment
```dtd
POST /api/appointments
Accept: application/json
Content-Type: application/json

REQUEST BODY:
{
    "patientId": "66034bd2fc13ae493250fa9c",
    "providerId": "65f886fcfc13ae494750faaa",
    "start": "2024-08-07T15:45:00",
    "end": "2024-08-07T16:15:00",
    "status": "CONFIRMED",
    "type": "FOLLOW_UP",
}

RESPONSE: HTTP 201 (CREATED)
Content: ID of the new appointment
```

#### Update an appointment
```dtd
PUT /api/appointments/66005c73fc13ae7b3650fc46
Accept: application/json
Content-Type: application/json

REQUEST BODY:
{
    "patientId": "66034bd2fc13ae493250fa9c",
    "providerId": "65f886fcfc13ae494750faaa",
    "start": "2024-08-07T15:45:00",
    "end": "2024-08-07T16:15:00",
    "status": "CONFIRMED",
    "type": "FOLLOW_UP",
}

RESPONSE: HTTP 200
Content: ID of the updated appointment
```

## Backlog
* Finish unit tests.
* Add paging to the appointment search endpoint.
* Implement patients endpoints.
* Implement providers endpoints.
* Implement users endpoints.
* Create login feature.
* Add Swagger documentation.