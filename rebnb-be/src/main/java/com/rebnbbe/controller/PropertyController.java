package com.rebnbbe.controller;

import com.rebnbbe.dto.IPropertyList;
import com.rebnbbe.dto.PropertyListDTO;
import com.rebnbbe.service.IPropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/public/properties")
@CrossOrigin
public class PropertyController {
    @Autowired
    private IPropertyService iPropertyService;

    @GetMapping("")
    public ResponseEntity<List<IPropertyList>> getAllProperties () {
        List<IPropertyList> properties = iPropertyService.getAllProperties();
        if (properties.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(properties, HttpStatus.OK);
        }
    }
}
