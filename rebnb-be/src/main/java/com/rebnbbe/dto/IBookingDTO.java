package com.rebnbbe.dto;

public interface IBookingDTO {
    long getBookingId();

    double getTotalPrice();

    String getCheckInDate();

    String getCheckOutDate();

    double getDeposit();

    long getPropertyId();

    String getTitle();

    String getCountry();

    String getRegion();

    String getCity();

    String getBedroom();

    String getBed();

    String getBath();
    String getImage();

    String getServiceFeeId();
    Integer getGuest();

    Long getTenantId();

    String getStatus();
}
