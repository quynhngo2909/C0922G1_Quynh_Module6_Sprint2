package com.rebnbbe.repository;

import com.rebnbbe.dto.IPropertyDTO;
import com.rebnbbe.model.Property;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
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
            "    p.map,\n" +
            "    p.bedroom,\n" +
            "    p.bed,\n" +
            "    p.bath,\n" +
            "    u.image                                                                           as `hostimage`,\n" +
            "    p.price_per_night                                                                 as `pricepernight`,\n" +
            "    p.max_guest                                                                       as `maxguest`,\n" +
            "    top.name                                                                          as `typeofplace`,\n" +
            "    pt.name                                                                           as `propertytype`,\n" +
            "    u.name                                                                            as `host`,\n" +
            "    avg(rp.score)                                                                     as `score`,\n" +
            "    (select pi.link_image from `property_image` pi where pi.property_id = p.id limit 1) as `image`,\n" +
            "    ''                                                                                as `distance`\n" +
            "from\n" +
            "    property p\n" +
            "        left join booking b on p.id = b.property_id\n" +
            "        left join review_property rp on b.review_property_id = rp.id\n" +
            "        join property_type pt on p.property_type_id = pt.id\n" +
            "        join type_of_place top on p.type_of_place_id = top.id\n" +
            "        join user u on p.host_id = u.id\n" +
            "where\n" +
            "    p.is_deleted = 0\n" +
            "group by p.id";

    String FIND_PROPERTY_BY_ID = "select\n" +
            "    p.id,\n" +
            "    p.title,\n" +
            "    p.description,\n" +
            "    p.country,\n" +
            "    p.region,\n" +
            "    p.city,\n" +
            "    p.map,\n" +
            "    p.bedroom,\n" +
            "    p.bed,\n" +
            "    p.bath,\n" +
            "    u.image                                                                           as `hostimage`,\n" +
            "    p.price_per_night                                                                 as `pricepernight`,\n" +
            "    p.max_guest                                                                       as `maxguest`,\n" +
            "    top.name                                                                          as `typeofplace`,\n" +
            "    pt.name                                                                           as `propertytype`,\n" +
            "    u.name                                                                            as `host`,\n" +
            "    u.id                                                                              as `hostid`,\n" +
            "    avg(rp.score)                                                                     as `score`,\n" +
            "    (select pi.link_image from property_image pi where pi.property_id = p.id limit 1) as `image`,\n" +
            "    ''                                                                                as `distance`\n" +
            "from\n" +
            "    property p\n" +
            "        left join booking b on p.id = b.property_id\n" +
            "        left join review_property rp on b.review_property_id = rp.id\n" +
            "        join property_type pt on p.property_type_id = pt.id\n" +
            "        join type_of_place top on p.type_of_place_id = top.id\n" +
            "        join user u on p.host_id = u.id\n" +
            "where\n" +
            "      p.is_deleted = 0\n" +
            "  and p.id = ?1";

    String FIND_PROPERTY_BY_CATEGORY_ID = "select\n" +
            "    p.id,\n" +
            "    p.title,\n" +
            "    p.description,\n" +
            "    p.country,\n" +
            "    p.region,\n" +
            "    p.city,\n" +
            "    p.map,\n" +
            "    p.bedroom,\n" +
            "    p.bed,\n" +
            "    p.bath,\n" +
            "    u.image                                                                           as `hostimage`,\n" +
            "    p.price_per_night                                                                 as `pricepernight`,\n" +
            "    p.max_guest                                                                       as `maxguest`,\n" +
            "    top.name                                                                          as `typeofplace`,\n" +
            "    pt.name                                                                           as `propertytype`,\n" +
            "    u.name                                                                            as `host`,\n" +
            "    avg(rp.score)                                                                     as `score`,\n" +
            "    (select pi.link_image from `property_image` pi where pi.property_id = p.id limit 1) as `image`,\n" +
            "    ''                                                                                as `distance`\n" +
            "from\n" +
            "    property p\n" +
            "        left join booking b on p.id = b.property_id\n" +
            "        left join review_property rp on b.review_property_id = rp.id\n" +
            "        join property_type pt on p.property_type_id = pt.id\n" +
            "        join type_of_place top on p.type_of_place_id = top.id\n" +
            "        join user u on p.host_id = u.id\n" +
            "        join property_category pc on p.id = pc.property_id\n" +
            "where\n" +
            "    p.is_deleted = 0\n" +
            "and pc.category_id = ?1\n" +
            "group by p.id";

    String FIND_PROPERTY_BY_LOCATION = "select\n" +
            "    p.id,\n" +
            "    p.title,\n" +
            "    p.description,\n" +
            "    p.country,\n" +
            "    p.region,\n" +
            "    p.city,\n" +
            "    p.map,\n" +
            "    p.bedroom,\n" +
            "    p.bed,\n" +
            "    p.bath,\n" +
            "    u.image                                                                           as `hostimage`,\n" +
            "    p.price_per_night                                                                 as `pricepernight`,\n" +
            "    p.max_guest                                                                       as `maxguest`,\n" +
            "    top.name                                                                          as `typeofplace`,\n" +
            "    pt.name                                                                           as `propertytype`,\n" +
            "    u.name                                                                            as `host`,\n" +
            "    avg(rp.score)                                                                     as `score`,\n" +
            "    (select pi.link_image from `property_image` pi where pi.property_id = p.id limit 1) as `image`,\n" +
            "    ''                                                                                as `distance`\n" +
            "from\n" +
            "    property p\n" +
            "        left join booking b on p.id = b.property_id\n" +
            "        left join review_property rp on b.review_property_id = rp.id\n" +
            "        join property_type pt on p.property_type_id = pt.id\n" +
            "        join type_of_place top on p.type_of_place_id = top.id\n" +
            "        join user u on p.host_id = u.id\n" +
            "where\n" +
            "        p.is_deleted = 0\n" +
            "and (p.country like concat('%',?1, '%') or p.region like concat('%',?2,'%') or p.city like concat('%',?3,'%'))\n" +
            "group by p.id";

    String FIND_ALL_PROPERTY_BY_CATEGORY_ID_AND_LOCATION = "select\n" +
            "    p.id,\n" +
            "    p.title,\n" +
            "    p.description,\n" +
            "    p.country,\n" +
            "    p.region,\n" +
            "    p.city,\n" +
            "    p.map,\n" +
            "    p.bedroom,\n" +
            "    p.bed,\n" +
            "    p.bath,\n" +
            "    u.image                                                                           as `hostimage`,\n" +
            "    p.price_per_night                                                                 as `pricepernight`,\n" +
            "    p.max_guest                                                                       as `maxguest`,\n" +
            "    top.name                                                                          as `typeofplace`,\n" +
            "    pt.name                                                                           as `propertytype`,\n" +
            "    u.name                                                                            as `host`,\n" +
            "    avg(rp.score)                                                                     as `score`,\n" +
            "    (select pi.link_image from `property_image` pi where pi.property_id = p.id limit 1) as `image`,\n" +
            "    ''                                                                                as `distance`\n" +
            "from\n" +
            "    property p\n" +
            "        left join booking b on p.id = b.property_id\n" +
            "        left join review_property rp on b.review_property_id = rp.id\n" +
            "        join property_type pt on p.property_type_id = pt.id\n" +
            "        join type_of_place top on p.type_of_place_id = top.id\n" +
            "        join user u on p.host_id = u.id\n" +
            "        join property_category pc on p.id = pc.property_id\n" +
            "where\n" +
            "        p.is_deleted = 0\n" +
            "  and pc.category_id = ?1\n" +
            "  and (p.country like concat('%',?2, '%') or p.region like concat('%',?3,'%') or p.city like concat('%',?4,'%'))\n" +
            "group by p.id;";
    @Query(value = ALL_PROPERTIES, nativeQuery = true)
    List<IPropertyDTO> getAllProperties();

    @Query(value = FIND_PROPERTY_BY_ID, nativeQuery = true)
    IPropertyDTO findPropertyById(String propertyId);

    @Query(value = ALL_PROPERTIES, nativeQuery = true)
    Page<IPropertyDTO> getPropertyPages(Pageable pageable);

    @Query(value = FIND_PROPERTY_BY_CATEGORY_ID, nativeQuery = true)
    Page<IPropertyDTO> findPropertyByCategoryId(Pageable pageable, int categoryId);

    @Query(value = FIND_PROPERTY_BY_LOCATION, nativeQuery = true)
    Page<IPropertyDTO> findPropertyByLocation(Pageable pageable, String country, String region, String city);

    @Query(value = FIND_ALL_PROPERTY_BY_CATEGORY_ID_AND_LOCATION, nativeQuery = true)
    Page<IPropertyDTO> findPropertyByCategoryIdAndLocation(Pageable pageable, int categoryId, String country, String region, String city);
}
