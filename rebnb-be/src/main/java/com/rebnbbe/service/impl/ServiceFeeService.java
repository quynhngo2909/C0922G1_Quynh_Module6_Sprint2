package com.rebnbbe.service.impl;

import com.rebnbbe.model.ServiceFee;
import com.rebnbbe.repository.IServiceFeeRepository;
import com.rebnbbe.service.IServiceFeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ServiceFeeService implements IServiceFeeService {
    @Autowired
    private IServiceFeeRepository iServiceFeeRepository;

    @Override
    public List<ServiceFee> getAllServiceFee() {
        return iServiceFeeRepository.findAll();
    }
}
