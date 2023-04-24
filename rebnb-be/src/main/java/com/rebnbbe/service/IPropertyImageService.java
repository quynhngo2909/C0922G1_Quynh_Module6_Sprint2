package com.rebnbbe.service;

import com.rebnbbe.dto.IPropertyImageDTO;

import java.util.List;

public interface IPropertyImageService {
    List<IPropertyImageDTO> getImageByPropertyId(String propertyID);
}
