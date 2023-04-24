package com.rebnbbe.service.impl;

import com.rebnbbe.model.User;
import com.rebnbbe.repository.IUserRepository;
import com.rebnbbe.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {
    @Autowired
    private IUserRepository iUserRepository;

    @Override
    public User findByEmail(String email) {
        return iUserRepository.findByEmail(email);
    }
}
