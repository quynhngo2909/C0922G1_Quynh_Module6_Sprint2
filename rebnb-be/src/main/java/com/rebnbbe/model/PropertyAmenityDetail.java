package com.rebnbbe.model;

import javax.persistence.*;

@Entity
public class PropertyAmenityDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "property_id", referencedColumnName = "id")
    private Property property;

    @ManyToOne
    @JoinColumn(name = "amenity_detail_id", referencedColumnName = "id")
    private AmenityDetail amenityDetail;

    public PropertyAmenityDetail() {
    }

    public PropertyAmenityDetail(long id, Property property, AmenityDetail amenityDetail) {
        this.id = id;
        this.property = property;
        this.amenityDetail = amenityDetail;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }

    public AmenityDetail getAmenityDetail() {
        return amenityDetail;
    }

    public void setAmenityDetail(AmenityDetail amenityDetail) {
        this.amenityDetail = amenityDetail;
    }
}
