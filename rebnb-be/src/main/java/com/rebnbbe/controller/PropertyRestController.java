package com.rebnbbe.controller;

import com.rebnbbe.dto.IPropertyDTO;
import com.rebnbbe.service.IPropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public/properties")
@CrossOrigin
public class PropertyRestController {
    @Autowired
    private IPropertyService iPropertyService;

    @GetMapping("")
    public ResponseEntity<List<IPropertyDTO>> getAllProperties () {
        List<IPropertyDTO> properties = iPropertyService.getAllProperties();
        if (properties.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(properties, HttpStatus.OK);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<IPropertyDTO> findPropertyById(@PathVariable(name = "id") String propertyId) {
        IPropertyDTO property = iPropertyService.findPropertyById(propertyId);
        if (property == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(property, HttpStatus.OK);
        }
    }
}
