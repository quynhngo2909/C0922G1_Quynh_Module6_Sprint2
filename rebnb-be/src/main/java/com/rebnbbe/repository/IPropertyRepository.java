package com.rebnbbe.repository;

import com.rebnbbe.dto.IPropertyList;
import com.rebnbbe.dto.PropertyListDTO;
import com.rebnbbe.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPropertyRepository extends JpaRepository<Property, Long> {
    String ALL_PROPERTIES = "select\n" +
            "    p.id,\n" +
            "    p.title,\n" +
            "    p.description,\n" +
            "    p.country,\n" +
            "    p.region,\n" +
            "    p.city,\n" +
            "    p.price_per_night as `pricepernight`,\n" +
            "    avg(rp.score)     as `score`,\n" +
            "    (select pi.link_image from property_image pi where pi.property_id = p.id limit 1) as `image`,\n" +
            "    ''                as `distance`\n" +
            "from\n" +
            "    property p\n" +
            "        left join booking b on p.id = b.property_id\n" +
            "        left join review_property rp on b.review_property_id = rp.id\n" +
            "where\n" +
            "    p.is_deleted = 0\n" +
            "group by p.id";

    @Query(value = ALL_PROPERTIES, nativeQuery = true)
    List<IPropertyList> getAllProperties();


}
