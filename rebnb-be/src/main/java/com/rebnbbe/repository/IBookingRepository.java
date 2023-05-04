package com.rebnbbe.repository;

import com.rebnbbe.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface IBookingRepository extends JpaRepository<Booking, Long> {
    String CREATE_BOOKING = "insert into booking " +
            "(property_id, tenant_id, service_fee_id, check_in, check_out, deposit, total_price, review_property_id, guest, status)\n" +
            "values (:propertyId, :tenantId, :serviceFeeId, :checkIn, :checkOut, :deposit, :totalPrice, null, :guest, DEFAULT)";

    @Transactional
    @Modifying
    @Query(value = CREATE_BOOKING, nativeQuery = true)
    void saveBooking(long propertyId, long tenantId, int serviceFeeId, String checkIn, String checkOut, Double deposit,  Double totalPrice, int guest);
}
