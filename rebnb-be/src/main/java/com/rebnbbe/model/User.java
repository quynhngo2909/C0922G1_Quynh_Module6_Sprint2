package com.rebnbbe.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long userId;
    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private String birthday;
    private String phoneNumber;
    private String image;
    private String joinedDate;
    private String country;
    private String region;
    private String city;
    private boolean isDeleted;
    private String language;
    @Column(name = "is_identity_verified")
    private boolean isIdentityVerified;
    @Column(name = "is_super_host")
    private boolean isSuperHost;
    private String description;

    @OneToOne(mappedBy = "user")
    private Account account;

    @OneToMany(mappedBy = "tenant")
    @JsonIgnore
    private Set<WishList> wishListSet;

    @OneToMany(mappedBy = "tenant")
    @JsonIgnore
    private Set<Booking> bookingSet;

    public User() {
    }

    public User(long userId, String name, String email, String birthday, String phoneNumber, String image, String joinedDate, String country, String region, String city, boolean isDeleted, String language, boolean isIdentityVerified, boolean isSuperHost, String description) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.birthday = birthday;
        this.phoneNumber = phoneNumber;
        this.image = image;
        this.joinedDate = joinedDate;
        this.country = country;
        this.region = region;
        this.city = city;
        this.isDeleted = isDeleted;
        this.language = language;
        this.isIdentityVerified = isIdentityVerified;
        this.isSuperHost = isSuperHost;
        this.description = description;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getJoinedDate() {
        return joinedDate;
    }

    public void setJoinedDate(String joinedDate) {
        this.joinedDate = joinedDate;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public boolean isIdentityVerified() {
        return isIdentityVerified;
    }

    public void setIdentityVerified(boolean identityVerified) {
        isIdentityVerified = identityVerified;
    }

    public boolean isSuperHost() {
        return isSuperHost;
    }

    public void setSuperHost(boolean superHost) {
        isSuperHost = superHost;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Set<WishList> getWishListSet() {
        return wishListSet;
    }

    public void setWishListSet(Set<WishList> wishListSet) {
        this.wishListSet = wishListSet;
    }

    public Set<Booking> getBookingSet() {
        return bookingSet;
    }

    public void setBookingSet(Set<Booking> bookingSet) {
        this.bookingSet = bookingSet;
    }
}
