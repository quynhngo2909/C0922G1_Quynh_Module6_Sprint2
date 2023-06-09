package com.rebnbbe.service;

import com.rebnbbe.dto.IPropertyDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IPropertyService {
    List<IPropertyDTO> getAllProperties();
    IPropertyDTO findPropertyById(String propertyId);

    Page<IPropertyDTO> getPropertyPages(Pageable pageable);

    Page<IPropertyDTO> findPropertyByCategoryId(Pageable pageable, int categoryId);

    Page<IPropertyDTO> findPropertyByLocation(Pageable pageable, String country, String region, String city);

    Page<IPropertyDTO> findPropertyByCategoryIdAndLocation(Pageable pageable, int categoryId, String country, String region, String city);

}
