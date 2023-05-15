package com.rebnbbe.dto;

import java.time.LocalDate;
import java.util.Date;

public interface IBookedDate {
    LocalDate getCheckInDate();
    LocalDate getCheckOutDate();
    Integer getPropertyId();
}
