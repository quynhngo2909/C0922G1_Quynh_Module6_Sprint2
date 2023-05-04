package com.rebnbbe.service.impl;

import com.rebnbbe.repository.IBookingRepository;
import com.rebnbbe.service.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService implements IBookingService {
    @Autowired
    private IBookingRepository iBookingRepository;
    @Override
    public void saveBooking(long propertyId, long tenantId, int serviceFeeId, String checkIn, String checkOut, Double deposit, Double totalPrice, int guest) {
        iBookingRepository.saveBooking(propertyId, tenantId, serviceFeeId, checkIn, checkOut, deposit, totalPrice, guest);
    }
}
