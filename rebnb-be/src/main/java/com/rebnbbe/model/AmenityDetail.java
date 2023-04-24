package com.rebnbbe.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class AmenityDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false, unique = true)
    private String name;
    private String description;
    @ManyToOne
    @JoinColumn(name = "amenity_id", referencedColumnName = "id")
    private Amenity amenity;

    @OneToMany(mappedBy = "amenityDetail")
    @JsonIgnore
    private Set<PropertyAmenityDetail> propertyAmenityDetailSet;

    public AmenityDetail() {
    }

    public AmenityDetail(int id, String name, String description, Amenity amenity) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.amenity = amenity;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Amenity getAmenity() {
        return amenity;
    }

    public void setAmenity(Amenity amenity) {
        this.amenity = amenity;
    }

    public Set<PropertyAmenityDetail> getPropertyAmenityDetailSet() {
        return propertyAmenityDetailSet;
    }

    public void setPropertyAmenityDetailSet(Set<PropertyAmenityDetail> propertyAmenityDetailSet) {
        this.propertyAmenityDetailSet = propertyAmenityDetailSet;
    }
}
