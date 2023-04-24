package com.rebnbbe.repository;

import com.rebnbbe.dto.IPropertyImageDTO;
import com.rebnbbe.model.PropertyImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPropertyImageRepository extends JpaRepository<PropertyImage, Long> {
    String IMAGE_BY_PROPERTY_ID = "select\n" +
            "    pi.link_image as `image`\n" +
            "from\n" +
            "    property p\n" +
            "        left join property_image pi on p.id = pi.property_id\n" +
            "where\n" +
            "    p.id = ?1";

    @Query(value = IMAGE_BY_PROPERTY_ID, nativeQuery = true)
    public List<IPropertyImageDTO> getImageByPropertyId(String propertyID);
}
