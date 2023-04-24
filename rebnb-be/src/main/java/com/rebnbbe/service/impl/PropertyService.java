package com.rebnbbe.service.impl;

import com.rebnbbe.dto.IPropertyDTO;
import com.rebnbbe.repository.IPropertyRepository;
import com.rebnbbe.service.IPropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PropertyService implements IPropertyService {
    @Autowired
    private IPropertyRepository iPropertyRepository;

    @Override
    public List<IPropertyDTO> getAllProperties() {
        return iPropertyRepository.getAllProperties();
    }

    @Override
    public IPropertyDTO findPropertyById(String propertyId) {
        return iPropertyRepository.findPropertyById(propertyId);
    }
}