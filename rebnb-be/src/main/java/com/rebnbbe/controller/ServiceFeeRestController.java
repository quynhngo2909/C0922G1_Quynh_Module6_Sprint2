package com.rebnbbe.controller;

import com.rebnbbe.model.ServiceFee;
import com.rebnbbe.service.IServiceFeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.method.P;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/public/service_fee")
public class ServiceFeeRestController {
    @Autowired
    private IServiceFeeService iServiceFeeService;

    @GetMapping("")
    public ResponseEntity<List<ServiceFee>> findAllServiceFee() {
        List<ServiceFee> serviceFees = iServiceFeeService.getAllServiceFee();
        if (serviceFees.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(serviceFees, HttpStatus.OK);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceFee> findServiceFeeById(@PathVariable int id) {
        ServiceFee serviceFee = iServiceFeeService.findServiceFeeById(id);
        if (serviceFee == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(serviceFee, HttpStatus.OK);
        }
    }
}
