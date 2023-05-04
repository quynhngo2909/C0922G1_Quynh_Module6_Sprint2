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
    private double tenantFee;
    @Column(nullable = false)
    private double hostFee;

    @OneToMany(mappedBy = "serviceFee")
    @JsonIgnore
    private Set<Booking> bookingSet;

    public ServiceFee() {
    }

    public ServiceFee(int id, int rentalNight, double tenantFee, double hostFee) {
        this.id = id;
        this.rentalNight = rentalNight;
        this.tenantFee = tenantFee;
        this.hostFee = hostFee;
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

    public double getTenantFee() {
        return tenantFee;
    }

    public void setTenantFee(double tenantFee) {
        this.tenantFee = tenantFee;
    }

    public double getHostFee() {
        return hostFee;
    }

    public void setHostFee(double hostFee) {
        this.hostFee = hostFee;
    }

    public Set<Booking> getBookingSet() {
        return bookingSet;
    }

    public void setBookingSet(Set<Booking> bookingSet) {
        this.bookingSet = bookingSet;
    }
}
