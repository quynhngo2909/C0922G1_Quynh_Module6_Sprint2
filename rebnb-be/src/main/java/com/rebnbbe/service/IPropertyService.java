package com.rebnbbe.service;

import com.rebnbbe.dto.IPropertyDTO;

import java.util.List;

public interface IPropertyService {
    List<IPropertyDTO> getAllProperties();
    IPropertyDTO findPropertyById(String propertyId);
}
