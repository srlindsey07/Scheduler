package com.github.srlindsey07.appointmentscheduler.service;

import com.github.srlindsey07.appointmentscheduler.model.User;
import com.github.srlindsey07.appointmentscheduler.model.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    MongoOperations mongoTemplate;

    public List<User> getByRole(List<UserRole> roles) {
        Criteria criteria = Criteria.where("role").in(roles);
        return mongoTemplate.find(new Query(criteria), User.class);
    }
}
