package com.rebnbbe.service;


import com.rebnbbe.dto.IBookingDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBookingService {
    void saveBooking(long propertyId, long tenantId, int serviceFeeId, String checkIn, String checkOut, Double deposit,  Double totalPrice, int guest);
    Integer getUnpaidBookingQty(int tenantId);

    Page<IBookingDTO> getUnpaidBookingPages(int tenantId, Pageable pageable);
}
