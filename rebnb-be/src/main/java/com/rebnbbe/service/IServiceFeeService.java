package com.rebnbbe.service;

import com.rebnbbe.model.ServiceFee;

import java.util.List;

public interface IServiceFeeService {
    List<ServiceFee> getAllServiceFee();
    ServiceFee findServiceFeeById(int id);
}
