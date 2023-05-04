package com.rebnbbe.controller;

import com.rebnbbe.dto.BookingDTO;
import com.rebnbbe.model.Booking;
import com.rebnbbe.service.IBookingService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/public/booking")
@CrossOrigin
public class BookingRestController {
    @Autowired
    private IBookingService iBookingService;

        @PostMapping("/create-booking")
    public ResponseEntity<?> createBooking(@RequestBody @Validated BookingDTO bookingDTO, BindingResult bindingResult) {
        new BookingDTO().validate(bookingDTO, bindingResult);
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.BAD_REQUEST);
        }

        Booking booking = new Booking();
        BeanUtils.copyProperties(bookingDTO, booking);

        iBookingService.saveBooking(bookingDTO.getPropertyId(), bookingDTO.getTenantId(), booking.getServiceFee().getId(), booking.getCheckInDate(), booking.getCheckOutDate(), booking.getDeposit(), booking.getTotalPrice(), booking.getGuest());
        return new ResponseEntity<>( HttpStatus.OK);
    }

}
