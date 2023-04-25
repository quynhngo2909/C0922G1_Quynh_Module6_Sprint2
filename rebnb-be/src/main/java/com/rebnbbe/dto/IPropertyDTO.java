package com.rebnbbe.dto;

public interface IPropertyDTO {
    Long getId();
    String getTitle();
    String getDescription();
    String getCountry();
    String getRegion();
    String getCity();
    String getPricePerNight();
    Double getScore();
    Double getDistance();
    String getImage();
    String getMap();

    Integer getMaxGuest();

    String getTypeOfPlace();
    String getPropertyType();
    String getHost();
    Integer getBedroom();
    Integer getBed();
    Integer getBath();

    String getHostImage();
}
