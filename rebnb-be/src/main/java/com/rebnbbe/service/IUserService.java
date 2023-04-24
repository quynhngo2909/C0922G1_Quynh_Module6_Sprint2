package com.rebnbbe.service;

import com.rebnbbe.model.User;

public interface IUserService {
    User findByEmail(String email);
}
