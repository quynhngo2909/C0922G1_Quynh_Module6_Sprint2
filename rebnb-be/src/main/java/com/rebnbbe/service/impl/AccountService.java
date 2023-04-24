package com.rebnbbe.service.impl;

import com.rebnbbe.model.Account;
import com.rebnbbe.repository.IAccountRepository;
import com.rebnbbe.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService implements IAccountService {
    @Autowired
    IAccountRepository accountRepository;

    @Override
    public Account findAccountByEmail(String userEmail) {
        return accountRepository.findAccountByEmail(userEmail);
    }
}
