package com.rebnbbe.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class ServiceFee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false)
    private int rentalNight;
    @Column(nullable = false)
    private double tenant_fee;
    @Column(nullable = false)
    private double host_fee;

    @OneToMany(mappedBy = "serviceFee")
    @JsonIgnore
    private Set<Booking> bookingSet;

    public ServiceFee() {
    }

    public ServiceFee(int id, int rentalNight, double tenant_fee, double host_fee) {
        this.id = id;
        this.rentalNight = rentalNight;
        this.tenant_fee = tenant_fee;
        this.host_fee = host_fee;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRentalNight() {
        return rentalNight;
    }

    public void setRentalNight(int rentalNight) {
        this.rentalNight = rentalNight;
    }

    public double getTenant_fee() {
        return tenant_fee;
    }

    public void setTenant_fee(double tenant_fee) {
        this.tenant_fee = tenant_fee;
    }

    public double getHost_fee() {
        return host_fee;
    }

    public void setHost_fee(double host_fee) {
        this.host_fee = host_fee;
    }

    public Set<Booking> getBookingSet() {
        return bookingSet;
    }

    public void setBookingSet(Set<Booking> bookingSet) {
        this.bookingSet = bookingSet;
    }
}
