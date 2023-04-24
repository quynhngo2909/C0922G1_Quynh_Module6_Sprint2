package com.rebnbbe.service.impl;

import com.rebnbbe.model.Category;
import com.rebnbbe.repository.ICategoryRepository;
import com.rebnbbe.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository iCategoryRepository;
    @Override
    public List<Category> findAllCategories() {
        return iCategoryRepository.findAll();
    }
}
