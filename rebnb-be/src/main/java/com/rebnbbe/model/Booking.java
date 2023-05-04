package com.rebnbbe.model;

import javax.persistence.*;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long bookingId;
    @Column(name = "check_in", nullable = false)
    private String checkInDate;
    @Column(name = "check_out", nullable = false)
    private String checkOutDate;
    private Double deposit;
    private Double totalPrice;
    private int guest;
    @ManyToOne
    @JoinColumn(name = "property_id", referencedColumnName = "id")
    private Property property;

    @ManyToOne
    @JoinColumn(name = "tenant_id", referencedColumnName = "id")
    private User tenant;

    @ManyToOne
    @JoinColumn(name = "service_fee_id", referencedColumnName = "id")
    private ServiceFee serviceFee;

    @ManyToOne
    @JoinColumn(name = "status", referencedColumnName = "id")
    private BookingStatus bookingStatus;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="review_property_id", referencedColumnName = "id")
    private ReviewProperty reviewProperty;

    public Booking() {
    }

    public Booking(long bookingId, String checkInDate, String checkOutDate, Double deposit, Double totalPrice, Property property, User tenant, ServiceFee serviceFee, BookingStatus bookingStatus, int guest) {
        this.bookingId = bookingId;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.deposit = deposit;
        this.totalPrice = totalPrice;
        this.property = property;
        this.tenant = tenant;
        this.serviceFee = serviceFee;
        this.bookingStatus = bookingStatus;
        this.guest = guest;
    }

    public long getBookingId() {
        return bookingId;
    }

    public void setBookingId(long bookingId) {
        this.bookingId = bookingId;
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

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }

    public User getTenant() {
        return tenant;
    }

    public void setTenant(User tenant) {
        this.tenant = tenant;
    }

    public ServiceFee getServiceFee() {
        return serviceFee;
    }

    public void setServiceFee(ServiceFee serviceFee) {
        this.serviceFee = serviceFee;
    }

    public BookingStatus getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(BookingStatus bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    public ReviewProperty getReviewProperty() {
        return reviewProperty;
    }

    public void setReviewProperty(ReviewProperty reviewProperty) {
        this.reviewProperty = reviewProperty;
    }

    public int getGuest() {
        return guest;
    }

    public void setGuest(int guest) {
        this.guest = guest;
    }
}
