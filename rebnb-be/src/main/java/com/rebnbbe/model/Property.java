package com.rebnbbe.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long propertyId;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private String country;
    @Column(nullable = false)
    private String region;
    @Column(nullable = false)
    private String city;
    private double pricePerNight;
    @Column(nullable = false)
    private int maxGuest;
    @Column(nullable = false)
    private int bedroom;
    @Column(nullable = false)
    private int bed;
    @Column(nullable = false)
    private int bath;
    @Column(nullable = false, columnDefinition = "boolean default 0")
    private boolean is_deleted = false;

    @Column(nullable = false)
    private String map;

    @ManyToOne
    @JoinColumn(name= "type_of_place_id", referencedColumnName = "id")
    private TypeOfPlace typeOfPlace;

    @ManyToOne
    @JoinColumn(name = "property_type_id", referencedColumnName = "id")
    private PropertyType propertyType;

    @ManyToOne
    @JoinColumn(name = "host_id", referencedColumnName = "id")
    private User host;

    @OneToMany(mappedBy = "property")
    @JsonIgnore
    private Set<PropertyImage> propertyImageSet;

    @OneToMany(mappedBy = "property")
    @JsonIgnore
    private Set<PropertyAmenityDetail> propertyAmenityDetailSet;

    @OneToMany(mappedBy = "property")
    @JsonIgnore
    private Set<PropertyCategory> propertyCategorySet;

    @OneToMany(mappedBy = "property")
    @JsonIgnore
    private Set<Booking> bookingSet;

    @OneToMany(mappedBy = "property")
    @JsonIgnore
    private Set<WishList> wishListSet;

    public Property() {
    }

    public Property(long propertyId, String title, String description, String country, String region, String city, double pricePerNight, int maxGuest, int bedroom, int bed, int bath, boolean is_deleted, TypeOfPlace typeOfPlace, PropertyType propertyType, User host, String map) {
        this.propertyId = propertyId;
        this.title = title;
        this.description = description;
        this.country = country;
        this.region = region;
        this.city = city;
        this.pricePerNight = pricePerNight;
        this.maxGuest = maxGuest;
        this.bedroom = bedroom;
        this.bed = bed;
        this.bath = bath;
        this.is_deleted = is_deleted;
        this.typeOfPlace = typeOfPlace;
        this.propertyType = propertyType;
        this.host = host;
        this.map = map;
    }


    public long getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(long propertyId) {
        this.propertyId = propertyId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public double getPricePerNight() {
        return pricePerNight;
    }

    public void setPricePerNight(double pricePerNight) {
        this.pricePerNight = pricePerNight;
    }

    public int getMaxGuest() {
        return maxGuest;
    }

    public void setMaxGuest(int maxGuest) {
        this.maxGuest = maxGuest;
    }

    public int getBedroom() {
        return bedroom;
    }

    public void setBedroom(int bedroom) {
        this.bedroom = bedroom;
    }

    public int getBed() {
        return bed;
    }

    public void setBed(int bed) {
        this.bed = bed;
    }

    public int getBath() {
        return bath;
    }

    public void setBath(int bath) {
        this.bath = bath;
    }

    public boolean isIs_deleted() {
        return is_deleted;
    }

    public void setIs_deleted(boolean is_deleted) {
        this.is_deleted = is_deleted;
    }

    public TypeOfPlace getTypeOfPlace() {
        return typeOfPlace;
    }

    public void setTypeOfPlace(TypeOfPlace typeOfPlace) {
        this.typeOfPlace = typeOfPlace;
    }

    public PropertyType getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(PropertyType propertyType) {
        this.propertyType = propertyType;
    }

    public User getHost() {
        return host;
    }

    public void setHost(User host) {
        this.host = host;
    }

    public Set<PropertyImage> getPropertyImageSet() {
        return propertyImageSet;
    }

    public void setPropertyImageSet(Set<PropertyImage> propertyImageSet) {
        this.propertyImageSet = propertyImageSet;
    }

    public Set<PropertyAmenityDetail> getPropertyAmenityDetailSet() {
        return propertyAmenityDetailSet;
    }

    public void setPropertyAmenityDetailSet(Set<PropertyAmenityDetail> propertyAmenityDetailSet) {
        this.propertyAmenityDetailSet = propertyAmenityDetailSet;
    }

    public Set<PropertyCategory> getPropertyCategorySet() {
        return propertyCategorySet;
    }

    public void setPropertyCategorySet(Set<PropertyCategory> propertyCategorySet) {
        this.propertyCategorySet = propertyCategorySet;
    }

    public Set<Booking> getBookingSet() {
        return bookingSet;
    }

    public void setBookingSet(Set<Booking> bookingSet) {
        this.bookingSet = bookingSet;
    }

    public Set<WishList> getWishListSet() {
        return wishListSet;
    }

    public void setWishListSet(Set<WishList> wishListSet) {
        this.wishListSet = wishListSet;
    }

    public String getMap() {
        return map;
    }

    public void setMap(String map) {
        this.map = map;
    }
}

