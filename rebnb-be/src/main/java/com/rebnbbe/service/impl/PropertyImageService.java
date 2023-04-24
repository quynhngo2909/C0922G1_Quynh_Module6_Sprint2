package com.rebnbbe.service.impl;

import com.rebnbbe.dto.IPropertyImageDTO;
import com.rebnbbe.repository.IPropertyImageRepository;
import com.rebnbbe.service.IPropertyImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyImageService implements IPropertyImageService {
    @Autowired
    private IPropertyImageRepository iPropertyImageRepository;

    @Override
    public List<IPropertyImageDTO> getImageByPropertyId(String propertyID) {
        return iPropertyImageRepository.getImageByPropertyId(propertyID);
    }
}
