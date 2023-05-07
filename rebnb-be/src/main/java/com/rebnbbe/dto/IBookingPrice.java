package com.rebnbbe.dto;

public interface IBookingPrice {
    long getBookingId();

    double getTotalPrice();

    String getCheckInDate();

    String getCheckOutDate();

    double getDeposit();

}
