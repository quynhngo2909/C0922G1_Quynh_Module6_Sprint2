package com.rebnbbe.service;

import com.rebnbbe.dto.IPropertyList;
import com.rebnbbe.dto.PropertyListDTO;

import java.util.List;

public interface IPropertyService {
    List<IPropertyList> getAllProperties();
}
