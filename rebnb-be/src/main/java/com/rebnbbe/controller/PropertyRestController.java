package com.rebnbbe.controller;

import com.rebnbbe.dto.IPropertyDTO;
import com.rebnbbe.service.IPropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
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

    @GetMapping("/pages")
    public ResponseEntity<Page<IPropertyDTO>> getPropertyPages (@PageableDefault(size = 4)Pageable pageable) {
        Page<IPropertyDTO> propertyPages = iPropertyService.getPropertyPages(pageable);
        if (propertyPages.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(propertyPages, HttpStatus.OK);
        }
    }

    @GetMapping("/find_by_category_id/{id}")
    public ResponseEntity<Page<IPropertyDTO>> findPropertyByCategoryId (@PageableDefault(size = 4)Pageable pageable, @PathVariable int id) {
        Page<IPropertyDTO> propertyPages = iPropertyService.findPropertyByCategoryId(pageable, id);
        if (propertyPages.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(propertyPages, HttpStatus.OK);
        }
    }

    @GetMapping("/find_by_location")
    public ResponseEntity<Page<IPropertyDTO>> findPropertyByLocation(@PageableDefault(size = 4)Pageable pageable,
                                                                     @RequestParam(required = false, defaultValue = "") String country,
                                                                     @RequestParam(required = false, defaultValue = "") String region,
                                                                     @RequestParam(required = false, defaultValue = "") String city) {

        Page<IPropertyDTO> propertyPages = iPropertyService.findPropertyByLocation(pageable, country, region, city);
        if (propertyPages.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(propertyPages, HttpStatus.OK);
        }
    }

    @GetMapping("/find_by_category_id_and_location/{id}")
    public ResponseEntity<Page<IPropertyDTO>> findPropertyByCategoryIdAbdLocation (@PageableDefault(size = 4)Pageable pageable,
                                                                                   @PathVariable(name = "id") int id,
                                                                                   @RequestParam(required = false, defaultValue = "") String country,
                                                                                   @RequestParam(required = false, defaultValue = "") String region,
                                                                                   @RequestParam(required = false, defaultValue = "") String city) {
        Page<IPropertyDTO> propertyPages = iPropertyService.findPropertyByCategoryIdAndLocation(pageable, id, country, region, city);
        if (propertyPages.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(propertyPages, HttpStatus.OK);
        }
    }
}
