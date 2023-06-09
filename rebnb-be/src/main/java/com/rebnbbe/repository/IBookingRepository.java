package com.rebnbbe.repository;

import com.rebnbbe.dto.IBookedDate;
import com.rebnbbe.dto.IBookingDTO;
import com.rebnbbe.model.Booking;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IBookingRepository extends JpaRepository<Booking, Long> {
    String CREATE_BOOKING = "insert into booking " +
            "(property_id, tenant_id, service_fee_id, check_in, check_out, deposit, total_price, review_property_id, guest, status)\n" +
            "values (:propertyId, :tenantId, :serviceFeeId, :checkIn, :checkOut, :deposit, :totalPrice, null, :guest, DEFAULT)";
    String COUNT_UNPAID_BOOKING = "select count(b.id) as `unpaid_booking` from booking b where b.status = 1 and b.tenant_id = ?1";
    String GET_UNPAID_BOOKING = "select\n" +
            "    b.id          as `bookingid`,\n" +
            "    b.total_price as `totalprice`,\n" +
            "    b.check_in    as `checkindate`,\n" +
            "    b.check_out   as `checkoutdate`,\n" +
            "    b.deposit,\n" +
            "    p.id          as `propertyid`,\n" +
            "    p.title,\n" +
            "    p.country,\n" +
            "    p.region,\n" +
            "    p.city,\n" +
            "    p.bedroom,\n" +
            "    p.bed,\n" +
            "   (select pi.link_image from `property_image` pi where pi.property_id = p.id limit 1) as `image`,\n" +
            "    p.bath \n" +
            " from \n" +
            "    `booking` b \n" +
            "        join `property` p on p.id = b.property_id\n" +
            " where \n" +
            "      b.status = 1 \n" +
            "  and b.tenant_id = ?1";

    String UPDATE_PAID_STATUS_BOOKING = "update booking b set b.status = 2 where b.id = ?1";

    String UPDATE_BOOKING = "update booking b\n" +
            "set\n" +
            "    b.service_fee_id = ?1,\n" +
            "    b.check_in       = ?2,\n" +
            "    b.check_out      = ?3,\n" +
            "    b.deposit        = ?4,\n" +
            "    b.total_price    = ?5,\n" +
            "    b.guest          = ?6\n" +
            "where\n" +
            "        b.id = ?7";


    String FIND_UNPAID_BOOKING_BY_ID = "select\n" +
            "    b.id                                                                              as `bookingid`,\n" +
            "    b.total_price                                                                     as `totalprice`,\n" +
            "    b.check_in                                                                        as `checkindate`,\n" +
            "    b.check_out                                                                       as `checkoutdate`,\n" +
            "    b.deposit,\n" +
            "    b.guest,\n" +
            "    b.tenant_id as `tenantid`,\n" +
            "    p.id                                                                              as `propertyid`,\n" +
            "    p.title,\n" +
            "    p.country,\n" +
            "    p.region,\n" +
            "    p.city,\n" +
            "    p.bedroom,\n" +
            "    p.bed,\n" +
            "    (select pi.link_image from property_image pi where pi.property_id = p.id limit 1) as `image`,\n" +
            "    p.bath,\n" +
            "    b.service_fee_id as 'servicefeeid'\n" +
            "from\n" +
            "    booking b\n" +
            "        join property p on p.id = b.property_id\n" +
            "where\n" +
            "        b.status = 1\n" +
            "  and b.id = ?1";

    String GET_NON_UNPAID_BOOKING = "select\n" +
            "    b.id                                                                              as `bookingid`,\n" +
            "    b.total_price                                                                     as `totalprice`,\n" +
            "    b.check_in                                                                        as `checkindate`,\n" +
            "    b.check_out                                                                       as `checkoutdate`,\n" +
            "    b.deposit,\n" +
            "    p.id                                                                              as `propertyid`,\n" +
            "    p.title,\n" +
            "    p.country,\n" +
            "    p.region,\n" +
            "    p.city,\n" +
            "    p.bedroom,\n" +
            "    p.bed,\n" +
            "    (select pi.link_image from `property_image` pi where pi.property_id = p.id limit 1) as `image`,\n" +
            "    p.bath,\n" +
            "    bs.name                                                                           as `status`,\n" +
            "    b.guest\n " +
            "from\n" +
            "    booking b\n" +
            "        join property p on p.id = b.property_id\n" +
            "        join booking_status bs on bs.id = b.status\n" +
            "where\n" +
            "      b.status not like 1\n" +
            "  and b.tenant_id = ?1";

    String FIND_ALL_VALID_BOOKED_DATE_BY_PROPERTY_ID = "select\n" +
            "    b.check_in                                                                        as `checkindate`,\n" +
            "    b.check_out                                                                       as `checkoutdate`,\n" +
            "    p.id                                                                              as `propertyid`\n" +
            "from\n" +
            "    booking b\n" +
            "        join property p on p.id = b.property_id\n" +
            "        join booking_status bs on bs.id = b.status\n" +
            "where\n" +
            "        b.status in (1,2)\n" +
            "  and b.property_id = ?1\n" +
            "order by b.check_in";

    @Transactional
    @Modifying
    @Query(value = CREATE_BOOKING, nativeQuery = true)
    void saveBooking(long propertyId, long tenantId, int serviceFeeId, String checkIn, String checkOut, Double deposit, Double totalPrice, int guest);

    @Query(value = COUNT_UNPAID_BOOKING, nativeQuery = true)
    Integer getUnpaidBookingQty(int tenantId);

    @Query(value = GET_UNPAID_BOOKING, nativeQuery = true)
    Page<IBookingDTO> getUnpaidBookingPages(int tenantId, Pageable pageable);

    @Transactional
    @Modifying
    @Query(value = UPDATE_PAID_STATUS_BOOKING, nativeQuery = true)
    void updatePaidStatusBooking(long bookingId);

    @Query(value = FIND_UNPAID_BOOKING_BY_ID, nativeQuery = true)
    IBookingDTO findUnpaidBookingById(long bookingId);

    @Transactional
    @Modifying
    @Query(value = UPDATE_BOOKING, nativeQuery = true)
    void updateBooking(int serviceFeeId, String checkIn,
                       String checkOut, double deposit, double totalPrice, int guest, long bookingId);

    @Query(value = GET_NON_UNPAID_BOOKING, nativeQuery = true)
    Page<IBookingDTO> getNonUnpaidBookingPages(int tenantId, Pageable pageable);

    @Query(value = FIND_ALL_VALID_BOOKED_DATE_BY_PROPERTY_ID, nativeQuery = true)
    List<IBookedDate> findAllValidBookedDateByPropertyId(int propertyId);
}

