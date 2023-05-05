package com.rebnbbe.service.impl;

import com.rebnbbe.dto.IBookingDTO;
import com.rebnbbe.repository.IBookingRepository;
import com.rebnbbe.service.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BookingService implements IBookingService {
    @Autowired
    private IBookingRepository iBookingRepository;
    @Override
    public void saveBooking(long propertyId, long tenantId, int serviceFeeId, String checkIn, String checkOut, Double deposit, Double totalPrice, int guest) {
        iBookingRepository.saveBooking(propertyId, tenantId, serviceFeeId, checkIn, checkOut, deposit, totalPrice, guest);
    }

    @Override
    public Integer getUnpaidBookingQty(int tenantId) {
        return iBookingRepository.getUnpaidBookingQty(tenantId);
    }

    @Override
    public Page<IBookingDTO> getUnpaidBookingPages(int tenantId, Pageable pageable) {
        return iBookingRepository.getUnpaidBookingPages(tenantId, pageable);
    }
}
