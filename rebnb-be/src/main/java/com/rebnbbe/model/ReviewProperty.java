package com.rebnbbe.model;

import javax.persistence.*;

@Entity
public class ReviewProperty {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String reviewDate;
    @Column(nullable = false)
    private String Content;

    @OneToOne(mappedBy = "reviewProperty")
    private Booking booking;

    public ReviewProperty() {
    }

    public ReviewProperty(long id, String reviewDate, String content) {
        this.id = id;
        this.reviewDate = reviewDate;
        Content = content;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getReviewDate() {
        return reviewDate;
    }

    public void setReviewDate(String reviewDate) {
        this.reviewDate = reviewDate;
    }

    public String getContent() {
        return Content;
    }

    public void setContent(String content) {
        Content = content;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}
