package com.rebnbbe.service.impl;

import com.rebnbbe.dto.IPropertyDTO;
import com.rebnbbe.repository.IPropertyRepository;
import com.rebnbbe.service.IPropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PropertyService implements IPropertyService {
    private final IPropertyRepository iPropertyRepository;

    public PropertyService(IPropertyRepository iPropertyRepository) {
        this.iPropertyRepository = iPropertyRepository;
    }

    @Override
    public List<IPropertyDTO> getAllProperties() {
        return iPropertyRepository.getAllProperties();
    }

    @Override
    public IPropertyDTO findPropertyById(String propertyId) {
        return iPropertyRepository.findPropertyById(propertyId);
    }

    @Override
    public Page<IPropertyDTO> getPropertyPages(Pageable pageable) {
        return iPropertyRepository.getPropertyPages(pageable);
    }

    @Override
    public Page<IPropertyDTO> findPropertyByCategoryId(Pageable pageable, int categoryId) {
        return iPropertyRepository.findPropertyByCategoryId(pageable, categoryId);
    }

    @Override
    public Page<IPropertyDTO> findPropertyByLocation(Pageable pageable,  String country, String region, String city) {
        return iPropertyRepository.findPropertyByLocation(pageable, country, region, city);
    }

    @Override
    public Page<IPropertyDTO> findPropertyByCategoryIdAndLocation(Pageable pageable, int categoryId, String country, String region, String city) {
        return iPropertyRepository.findPropertyByCategoryIdAndLocation(pageable, categoryId, country, region, city);
    }
}
