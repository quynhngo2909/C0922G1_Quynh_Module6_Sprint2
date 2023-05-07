package com.rebnbbe.controller;

import com.rebnbbe.dto.BookingDTO;
import com.rebnbbe.dto.IBookingDTO;
import com.rebnbbe.dto.IBookingPrice;
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

@RestController
@RequestMapping("/api")
@CrossOrigin
public class BookingRestController {
    @Autowired
    private IBookingService iBookingService;

    @PostMapping("/public/user/create-booking")
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

    @GetMapping("/public/user/unpaid-booking/{id}")
    public ResponseEntity<Integer> getUnpaidBookingQty(@PathVariable int id){
        Integer unpaidBooking = iBookingService.getUnpaidBookingQty(id);
        return new ResponseEntity<>(unpaidBooking, HttpStatus.OK);
    }

    @GetMapping("/public/user/unpaid-booking-list/{id}")
    public ResponseEntity<Page<IBookingDTO>> getUnpaidBookingPages(@PathVariable int id,
                                                                   @PageableDefault(size = 4, sort = "check_in", direction = Sort.Direction.ASC) Pageable pageable) {
        Page<IBookingDTO> unpaidBookingPages = iBookingService.getUnpaidBookingPages(id,pageable);
        if (unpaidBookingPages.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(unpaidBookingPages, HttpStatus.OK);
    }

    @GetMapping("/public/user/update-paid-status/{id}")
    public ResponseEntity<?> updatePaidStatusBooking(@PathVariable long id) {
        IBookingDTO iBookingDTO = iBookingService.findUnpaidBookingById(id);
        if (iBookingDTO == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        iBookingService.updatePaidStatusBooking(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/public/user/get-unpaid-booking/{id}")
    public ResponseEntity<IBookingDTO> findUnpaidBookingById(@PathVariable long id) {
        IBookingDTO iBookingDTO = iBookingService.findUnpaidBookingById(id);
        if (iBookingDTO == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(iBookingDTO, HttpStatus.OK);
        }
    }

    @PostMapping("/public/user/update-booking")
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
//        iBookingRepository.updateBooking(serviceFeeId, checkIn, checkOut, deposit, totalPrice, guest, bookingId);
}
