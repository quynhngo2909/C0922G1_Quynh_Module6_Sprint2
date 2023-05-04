package com.rebnbbe.repository;

import com.rebnbbe.dto.IServiceFeeDTO;
import com.rebnbbe.model.ServiceFee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IServiceFeeRepository extends JpaRepository<ServiceFee, Integer> {
}
