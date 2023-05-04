package com.rebnbbe.service;


public interface IBookingService {
    void saveBooking(long propertyId, long tenantId, int serviceFeeId, String checkIn, String checkOut, Double deposit,  Double totalPrice, int guest);
}
