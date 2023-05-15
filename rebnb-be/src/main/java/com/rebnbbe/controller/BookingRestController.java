package com.rebnbbe.controller;

import com.rebnbbe.dto.BookingDTO;
import com.rebnbbe.dto.IBookedDate;
import com.rebnbbe.dto.IBookingDTO;
import com.rebnbbe.model.Booking;
import com.rebnbbe.service.IBookingService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class BookingRestController {
    @Autowired
    private IBookingService iBookingService;

    @PostMapping("/user/create-booking")
    public ResponseEntity<?> createBooking(@RequestBody @Validated BookingDTO bookingDTO, BindingResult bindingResult) {
        new BookingDTO().validate(bookingDTO, bindingResult);
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.BAD_REQUEST);
        }

        Booking booking = new Booking();
        BeanUtils.copyProperties(bookingDTO, booking);

        iBookingService.saveBooking(bookingDTO.getPropertyId(), bookingDTO.getTenantId(), booking.getServiceFee().getId(), booking.getCheckInDate(), booking.getCheckOutDate(), booking.getDeposit(), booking.getTotalPrice(), booking.getGuest());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/user/unpaid-booking/{id}")
    public ResponseEntity<Integer> getUnpaidBookingQty(@PathVariable int id){
        Integer unpaidBooking = iBookingService.getUnpaidBookingQty(id);
        return new ResponseEntity<>(unpaidBooking, HttpStatus.OK);
    }

    @GetMapping("/user/unpaid-booking-list/{id}")
    public ResponseEntity<Page<IBookingDTO>> getUnpaidBookingPages(@PathVariable int id,
                                                                   @PageableDefault(size = 4, sort = "check_in", direction = Sort.Direction.ASC) Pageable pageable) {
        Page<IBookingDTO> unpaidBookingPages = iBookingService.getUnpaidBookingPages(id,pageable);
        if (unpaidBookingPages.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(unpaidBookingPages, HttpStatus.OK);
    }

    @GetMapping("/user/update-paid-status/{id}")
    public ResponseEntity<?> updatePaidStatusBooking(@PathVariable long id) {
        IBookingDTO iBookingDTO = iBookingService.findUnpaidBookingById(id);
        if (iBookingDTO == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        iBookingService.updatePaidStatusBooking(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/user/get-unpaid-booking/{id}")
    public ResponseEntity<IBookingDTO> findUnpaidBookingById(@PathVariable long id) {
        IBookingDTO iBookingDTO = iBookingService.findUnpaidBookingById(id);
        if (iBookingDTO == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(iBookingDTO, HttpStatus.OK);
        }
    }

    @PostMapping("/user/update-booking")
    public ResponseEntity<?> updateBooking(@RequestBody @Validated BookingDTO bookingDTO, BindingResult bindingResult) {
        new BookingDTO().validate(bookingDTO, bindingResult);
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.BAD_REQUEST);
        }

        Booking booking = new Booking();
        BeanUtils.copyProperties(bookingDTO, booking);

        iBookingService.updateBooking( bookingDTO.getServiceFee().getId(), booking.getCheckInDate(), booking.getCheckOutDate(), booking.getDeposit(), booking.getTotalPrice(), booking.getGuest(), booking.getBookingId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/user/non-unpaid-booking-list/{id}")
    public ResponseEntity<Page<IBookingDTO>> getNonUnpaidBookingPages(@PathVariable int id,
                                                                   @PageableDefault(size = 4, sort = "check_in", direction = Sort.Direction.DESC) Pageable pageable) {
        Page<IBookingDTO> unpaidBookingPages = iBookingService.getNonUnpaidBookingPages(id,pageable);
        if (unpaidBookingPages.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(unpaidBookingPages, HttpStatus.OK);
    }

    @GetMapping("/user/booked-dates/{id}")
    public ResponseEntity<List<IBookedDate>> test(@PathVariable int id) {
        List<IBookedDate> bookedDates = iBookingService.findAllValidBookedDateByPropertyId(id);
        if (bookedDates.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(bookedDates, HttpStatus.OK);
    }

    @GetMapping("/public/booked-date-list/{id}")
    public ResponseEntity<Set<LocalDate>> getAllBookedDateByPropertyId(@PathVariable int id) {
        List<IBookedDate> bookedDates = iBookingService.findAllValidBookedDateByPropertyId(id);
        Set<LocalDate> dateLinkedHashSet = iBookingService.getBookedDateList(bookedDates);
        if (dateLinkedHashSet.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(dateLinkedHashSet, HttpStatus.OK);
    }
}
