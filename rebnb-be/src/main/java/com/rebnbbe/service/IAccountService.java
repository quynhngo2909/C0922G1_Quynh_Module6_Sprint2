package com.rebnbbe.service;

import com.rebnbbe.model.Account;

public interface IAccountService {

    Account findAccountByEmail(String userEmail);
}
