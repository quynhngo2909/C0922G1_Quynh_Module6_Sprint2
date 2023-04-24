package com.rebnbbe.controller;

import com.rebnbbe.dto.IPropertyImageDTO;
import com.rebnbbe.service.IPropertyImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public/property_image")
@CrossOrigin
public class PropertyImageRestController {
    @Autowired
    private IPropertyImageService iPropertyImageService;

    @GetMapping("/{id}")
    private ResponseEntity<List<IPropertyImageDTO>> getPropertyImageByPropertyId(@PathVariable(name = "id") String propertyId) {
        List<IPropertyImageDTO> propertyImages = iPropertyImageService.getImageByPropertyId(propertyId);
        if (propertyImages.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }   else {
            return new ResponseEntity<>(propertyImages, HttpStatus.OK);
        }
    }
}
