package com.rebnbbe.service.impl;

import com.rebnbbe.dto.BookingDTO;
import com.rebnbbe.dto.IBookedDate;
import com.rebnbbe.dto.IBookingDTO;
import com.rebnbbe.repository.IBookingRepository;
import com.rebnbbe.service.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

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

    @Override
    public void updatePaidStatusBooking(long bookingId) {
        iBookingRepository.updatePaidStatusBooking(bookingId);
    }

    @Override
    public IBookingDTO findUnpaidBookingById(long bookingId) {
        return iBookingRepository.findUnpaidBookingById(bookingId);
    }

    @Override
    public void updateBooking(int serviceFeeId, String checkIn, String checkOut, double deposit, double totalPrice, int guest, long bookingId) {
        iBookingRepository.updateBooking(serviceFeeId, checkIn, checkOut, deposit, totalPrice, guest, bookingId);
    }

    @Override
    public Page<IBookingDTO> getNonUnpaidBookingPages(int tenantId, Pageable pageable) {
        return iBookingRepository.getNonUnpaidBookingPages(tenantId, pageable);
    }

    @Override
    public List<IBookedDate> findAllValidBookedDateByPropertyId(int propertyId) {
        return iBookingRepository.findAllValidBookedDateByPropertyId(propertyId);
    }

    @Override
    public Set<LocalDate> getBookedDateList(List<IBookedDate> bookedDateList) {
        Set<LocalDate> dateLinkedHashSet = new LinkedHashSet<>();
        int bookedDatesSize = bookedDateList.size();
        for (int i = 0; i < bookedDatesSize; i++) {
            LocalDate checkInDate = bookedDateList.get(i).getCheckInDate();
            LocalDate checkOutDate = bookedDateList.get(i).getCheckOutDate();
            LocalDate newDate = checkInDate.plusDays(1);

            dateLinkedHashSet.add(checkInDate);

            while (checkOutDate.isAfter(newDate)) {
                dateLinkedHashSet.add(newDate);
                newDate = newDate.plusDays(1);
            }

            dateLinkedHashSet.add(checkOutDate);
        }
        return dateLinkedHashSet;
    }
}
