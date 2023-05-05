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
}
// b.id          as `bookingid`,
//    b.total_price as `totalprice`,
//    b.check_in    as `checkin`,
//    b.check_out   as `checkout`,
//    b.deposit,
//    p.id          as `propertyid`,
//    p.title,
//    p.country,
//    p.region,
//    p.city,
//    p.bedroom,
//    p.bed,
//    p.bath