import {Component, OnInit} from '@angular/core';
import {Booking} from '../../model/booking';
import {Property} from '../../model/property';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceFee} from '../../model/service-fee';
import {PropertyService} from '../../service/property.service';
import {PropertyImageService} from '../../service/property-image.service';
import {ServiceFeeService} from '../../service/service-fee.service';
import {ShareService} from '../../service/share.service';
import {BookingService} from '../../service/booking.service';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {
  isLoggedIn = false;
  role: string;
  userId: number;

  booking: Booking;
  bookingId: number;
  property: Property;
  propertyId: number;

  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;

  bookingForm: FormGroup;
  serviceFees: ServiceFee[];
  checkIn: Date = null;
  checkOut: Date = null;
  stayNights = 0;
  totalPrice: number;
  serviceFee: ServiceFee;
  errors = {
    checkInDate: '',
    checkOutDate: '',
    deposit: '',
    totalPrice: '',
    propertyId: '',
    tenantId: '',
    serviceFee: '',
    guest: ''
  };

  bookedDates: Date[];

  constructor(private propertyService: PropertyService,
              private propertyImageService: PropertyImageService,
              private serviceFeeService: ServiceFeeService,
              private shareService: ShareService,
              private bookingService: BookingService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.shareService.getClickEvent().subscribe(() => {
      this.userId = this.shareService.getUserId();
      this.role = this.shareService.getUserRole();
      this.isLoggedIn = this.shareService.getLogInStatus();
    });

    this.userId = this.shareService.getUserId();
    this.role = this.shareService.getUserRole();
    this.isLoggedIn = this.shareService.getLogInStatus();

    this.activatedRoute.paramMap.subscribe(async param => {
      this.booking = await this.bookingService.findUnpaidBookingById(+param.get('bookingId')).toPromise();
      this.property = await this.propertyService.findPropertyById(this.booking.propertyId).toPromise();
      this.serviceFees = await this.serviceFeeService.getAllServiceFee().toPromise();
      this.serviceFee = await this.serviceFeeService.findServiceFeeById(this.booking.serviceFeeId).toPromise();
      this.checkIn = new Date(this.booking?.checkInDate);
      this.checkOut = new Date(this.booking?.checkOutDate);
      this.stayNights = (this.checkOut.getTime() - this.checkIn.getTime()) / (1000 * 60 * 60 * 24);
      this.getImageByPropertyId();
      this.totalPrice = this.booking?.totalPrice;
      this.bookingService.getAllBookedDateByPropertyId(this.booking.propertyId).subscribe(items => {
        this.bookedDates = items;
        this.bookingForm = this.shareService.createEditBookingForm(this.property, this.booking, this.bookedDates, this.serviceFee);
      });
    });
  }

  getImageByPropertyId() {
    this.propertyImageService.getImageByPropertyId(this.booking.propertyId).subscribe(item => {
      this.image1 = item[0].image;
      this.image2 = item[1].image;
      this.image3 = item[2].image;
      this.image4 = item[3].image;
      this.image5 = item[4].image;
    });
  }


  onSubmit() {
    this.errors.serviceFee = '';
    this.errors.checkOutDate = '';
    this.errors.checkInDate = '';
    this.errors.guest = '';
    this.errors.deposit = '';
    this.errors.propertyId = '';
    this.errors.tenantId = '';
    this.errors.totalPrice = '';

    if (this.bookingForm.valid) {
      this.bookingService?.updateBooking(this.bookingForm.value).subscribe(item => {
        Swal.fire({
          icon: 'success',
          iconColor: 'darkorange',
          title: 'Updated booking successfully',
          confirmButtonText: 'Confirm',
          confirmButtonColor: 'darkorange'
        });
        this.shareService.setUnpaidBooking(this.userId);
        this.bookingService.getAllBookedDateByPropertyId(this.booking.propertyId).subscribe(items => {
          this.bookedDates = items;
          this.bookingForm = this.shareService.createEditBookingForm(this.property, this.booking, this.bookedDates, this.serviceFee);
        });
      }, error => {
        for (const e of error.error) {
          if (e) {
            switch (e.field) {
              case 'checkInDate':
                this.errors.checkInDate = e.defaultMessage;
                break;
              case 'checkOutDate':
                this.errors.checkOutDate = e.defaultMessage;
                break;
              case 'deposit':
                this.errors.deposit = e.defaultMessage;
                break;
              case 'totalPrice':
                this.errors.totalPrice = e.defaultMessage;
                break;
              case 'propertyId':
                this.errors.propertyId = e.defaultMessage;
                break;
              case 'tenantId':
                this.errors.tenantId = e.defaultMessage;
                break;
              case 'serviceFee':
                this.errors.serviceFee = e.defaultMessage;
                break;
              case 'guest':
                this.errors.guest = e.defaultMessage;
                break;
            }
          }
        }
      });
    }
  }


  checkCheckInDate(valueAsDate: Date) {
    this.checkIn = valueAsDate;
    if (this.checkOut != null) {
      this.stayNights = (this.checkOut.getTime() - this.checkIn.getTime()) / (1000 * 60 * 60 * 24);
      this.serviceFee = this.shareService.getServiceFee(this.serviceFees, this.stayNights);
      this.totalPrice = this.property.pricePerNight * this.stayNights * (1 + this.serviceFee.tenantFee);
    }
  }


  checkCheckOutDate(valueAsDate: Date) {
    this.checkOut = valueAsDate;
    if (this.checkIn != null) {
      this.stayNights = (this.checkOut.getTime() - this.checkIn.getTime()) / (1000 * 60 * 60 * 24);
      this.serviceFee = this.shareService.getServiceFee(this.serviceFees, this.stayNights);
      this.totalPrice = Math.round(this.property.pricePerNight * this.stayNights * (1 + this.serviceFee.tenantFee) * 100) / 100;
    }
  }


}
