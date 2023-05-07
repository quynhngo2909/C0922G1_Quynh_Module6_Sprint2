package com.rebnbbe.dto;

import com.rebnbbe.model.*;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.Period;


public class BookingDTO implements Validator {

    private long bookingId;
    @NotNull(message = "Please fill in check-in date")
    private String checkInDate;
    @NotNull(message = "Please fill in check-out date")
    private String checkOutDate;
    @Min(value = 0, message = "Deposit must be equal or bigger than 0")
    private Double deposit;
    private Double totalPrice;
    @NotNull(message = "Please fill in property Id")
    private long propertyId;
    @NotNull(message = "Please fill in tenant Id")
    private long tenantId;
    @NotNull(message = "Please fill in guest's quantity")
    @Min(value = 1, message = "Guests must be equal or bigger than 1")
    private int guest;
    @NotNull(message = "Please fill in service fee")
    private ServiceFee serviceFee;

    public BookingDTO() {
    }

    public BookingDTO(long bookingId, String checkInDate, String checkOutDate, Double deposit, Double totalPrice, long propertyId, long tenantId, int guest, ServiceFee serviceFee) {
        this.bookingId = bookingId;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.deposit = deposit;
        this.totalPrice = totalPrice;
        this.propertyId = propertyId;
        this.tenantId = tenantId;
        this.guest = guest;
        this.serviceFee = serviceFee;
    }

    public BookingDTO(String checkInDate, String checkOutDate, Double deposit, Double totalPrice, long propertyId, long tenantId, int guest, ServiceFee serviceFee) {
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.deposit = deposit;
        this.totalPrice = totalPrice;
        this.propertyId = propertyId;
        this.tenantId = tenantId;
        this.guest = guest;
        this.serviceFee = serviceFee;
    }

    public String getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(String checkInDate) {
        this.checkInDate = checkInDate;
    }

    public String getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(String checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public Double getDeposit() {
        return deposit;
    }

    public void setDeposit(Double deposit) {
        this.deposit = deposit;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public long getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(long propertyId) {
        this.propertyId = propertyId;
    }

    public long getTenantId() {
        return tenantId;
    }

    public void setTenantId(long tenantId) {
        this.tenantId = tenantId;
    }

    public ServiceFee getServiceFee() {
        return serviceFee;
    }

    public void setServiceFee(ServiceFee serviceFee) {
        this.serviceFee = serviceFee;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    public int getGuest() {
        return guest;
    }

    public void setGuest(int guest) {
        this.guest = guest;
    }

    public long getBookingId() {
        return bookingId;
    }

    public void setBookingId(long bookingId) {
        this.bookingId = bookingId;
    }

    private static final String DATE_REGEX = "^\\d{4}-\\d{2}-\\d{2}$";

    @Override
    public void validate(Object target, Errors errors) {
        BookingDTO bookingDTO = (BookingDTO) target;

        // Check format :check in, check out date
        if (!bookingDTO.getCheckInDate().matches(DATE_REGEX)) {
            errors.rejectValue("checkInDate", "checkInDate.invalidFormat", "Check in date is  invalid format");
        }

        if (!bookingDTO.getCheckOutDate().matches(DATE_REGEX)) {
            errors.rejectValue("checkOutDate", "checkOutDate.invalidFormat", "Check out date is invalid format");
        }

        // Check valid check in date, check out date
        LocalDate now = LocalDate.now();
        LocalDate checkInDate = LocalDate.parse(bookingDTO.getCheckInDate());
        LocalDate checkOutDate = LocalDate.parse(bookingDTO.getCheckOutDate());


        if(Period.between(now, checkInDate).isNegative()) {
            errors.rejectValue("checkInDate", "checkInDate.invalid", "Check in date must be equal or after current date.");
        }

        if(Period.between(checkInDate, checkOutDate).isNegative() || Period.between(checkInDate, checkOutDate).isZero()) {
            errors.rejectValue("checkOutDate", "checkOutDate.invalid", "Check out date must be after check in date.");

        }
    }
}
