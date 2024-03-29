package com.rebnbbe.controller;

import com.rebnbbe.model.Category;
import com.rebnbbe.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/public/category")
@CrossOrigin
public class CategoryRestController {
    @Autowired
    private ICategoryService iCategoryService;

    /**
     * Created by: QuynhND
     * Function: get all categories
     * @return HttpStatus.NO_CONTENT if there is no categoty or HttpStatus.Ok and a list of categories if there is no error.
     */
    @GetMapping("")
    public ResponseEntity<List<Category>> getAllCategory() {
        List<Category> categories = iCategoryService.findAllCategories();
        if (categories.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(categories, HttpStatus.OK);
        }
    }
}
