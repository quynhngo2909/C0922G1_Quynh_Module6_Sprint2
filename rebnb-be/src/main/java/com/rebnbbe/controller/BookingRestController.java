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

    /**
     * Created by: QuynhND
     * Date create:
     * Function: create booking
     * @return HttpStatus.BAD_REQUEST if BindingResult has error or HttpStatus.OK if saving new booking completed.
     */
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

    /**
     * Created by: QuynhND
     * Function: get total quantity of unpaid booking by user id
     * @param id
     * @return HttpStatus.OK and the function result.
     */
    @GetMapping("/user/unpaid-booking/{id}")
    public ResponseEntity<Integer> getUnpaidBookingQty(@PathVariable int id){
        Integer unpaidBooking = iBookingService.getUnpaidBookingQty(id);
        return new ResponseEntity<>(unpaidBooking, HttpStatus.OK);
    }

    /**
     * Created by: QuynhND
     * Function: get list of unpaid booking by user id
     * @param id
     * @param pageable
     * @return HttpStatus.NO_CONTENT if result is empty or HttpStatus.Ok if result is not error.
     */
    @GetMapping("/user/unpaid-booking-list/{id}")
    public ResponseEntity<Page<IBookingDTO>> getUnpaidBookingPages(@PathVariable int id,
                                                                   @PageableDefault(size = 4, sort = "check_in", direction = Sort.Direction.ASC) Pageable pageable) {
        Page<IBookingDTO> unpaidBookingPages = iBookingService.getUnpaidBookingPages(id,pageable);
        if (unpaidBookingPages.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(unpaidBookingPages, HttpStatus.OK);
    }

    /**
     * Created by: QuynhND
     * Function: update Paid Status of Booking by Booking id
     * @param id
     * @return HttpStatus.BAD_REQUEST if there is no available booking or HttpStatus.Ok if there is no error.
     */
    @GetMapping("/user/update-paid-status/{id}")
    public ResponseEntity<?> updatePaidStatusBooking(@PathVariable long id) {
        IBookingDTO iBookingDTO = iBookingService.findUnpaidBookingById(id);
        if (iBookingDTO == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        iBookingService.updatePaidStatusBooking(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * Created by: QuynhND
     * Function: find unpaid booking by booking id
     * @param id
     * @return HttpStatus.BAD_REQUEST if there is no available booking or HttpStatus.Ok if there is no error.
     */
    @GetMapping("/user/get-unpaid-booking/{id}")
    public ResponseEntity<IBookingDTO> findUnpaidBookingById(@PathVariable long id) {
        IBookingDTO iBookingDTO = iBookingService.findUnpaidBookingById(id);
        if (iBookingDTO == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(iBookingDTO, HttpStatus.OK);
        }
    }

    /**
     * Created by: QuynhND
     * Function: update booking
     * @param bookingDTO
     * @param bindingResult
     * @return HttpStatus.BAD_REQUEST if there is no available booking or HttpStatus.Ok if the booking is updated.
     */
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

    /**
     * Created by: QuynhND
     * Function: get all bookings except unpaid ones
     * @param id
     * @param pageable
     * @return HttpStatus.NO_CONTENT if there is no available booking or HttpStatus.Ok and a page of booking if there is no error.
     */
    @GetMapping("/user/non-unpaid-booking-list/{id}")
    public ResponseEntity<Page<IBookingDTO>> getNonUnpaidBookingPages(@PathVariable int id,
                                                                   @PageableDefault(size = 4, sort = "check_in", direction = Sort.Direction.DESC) Pageable pageable) {
        Page<IBookingDTO> unpaidBookingPages = iBookingService.getNonUnpaidBookingPages(id,pageable);
        if (unpaidBookingPages.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(unpaidBookingPages, HttpStatus.OK);
    }

    /**
     * Created by: QuynhND
     * Function: get all valid booked dates by property id
     * @param id
     * @return HttpStatus.NO_CONTENT if there is no available booking or HttpStatus.Ok and a list of dates if there is no error.
     */
    @GetMapping("/user/booked-dates/{id}")
    public ResponseEntity<List<IBookedDate>> getAllValidBookedDateByPropertyId(@PathVariable int id) {
        List<IBookedDate> bookedDates = iBookingService.findAllValidBookedDateByPropertyId(id);
        if (bookedDates.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(bookedDates, HttpStatus.OK);
    }

    /**
     * Created by: QuynhND
     * Function: get all booked dates by property id
     * @param id
     * @return HttpStatus.NO_CONTENT if there is no available booking or HttpStatus.Ok and a set of dates if there is no error.
     */
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
