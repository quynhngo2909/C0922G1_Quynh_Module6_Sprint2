import {Component, OnInit} from '@angular/core';
import {PropertyService} from '../../service/property.service';
import {PropertyImageService} from '../../service/property-image.service';
import {ActivatedRoute} from '@angular/router';
import {Property} from '../../model/property';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceFeeService} from '../../service/service-fee.service';
import {ServiceFee} from '../../model/service-fee';
import {BookingService} from '../../service/booking.service';
import Swal from 'sweetalert2';
import {Booking} from '../../model/booking';
import {ShareService} from '../../service/share.service';
import {validateDateRange, validateCheckIn} from '../../validation/booking.validator';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  isLoggedIn = false;
  role: string;
  userId: number;

  booking: Booking;
  property: Property;
  propertyId: string;

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

  minDate: Date;
  maxDate: Date;

  constructor(private propertyService: PropertyService,
              private propertyImageService: PropertyImageService,
              private serviceFeeService: ServiceFeeService,
              private shareService: ShareService,
              private bookingService: BookingService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 10, 11, 31);
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
      this.propertyId = param.get('id');
      this.getImageByPropertyId();
      await this.findPropertyById();
      await this.findServiceFees();
      this.bookingForm = this.fb?.group({
        checkInDate: [this.booking?.checkInDate, Validators.compose([Validators.required, validateCheckIn])],
        checkOutDate: [this.booking?.checkOutDate, Validators.compose([Validators.required])],
        guest: [1, Validators.compose([Validators.required, Validators.max(this.property.maxGuest)])],
        deposit: [0],
        totalPrice: [0, Validators.compose([Validators.required])],
        propertyId: [this.propertyId, Validators.compose([Validators.required])],
        tenantId: [this.userId, Validators.compose([Validators.required])],
        serviceFee: [this.serviceFee, Validators.compose([Validators.required])],
      }, {
        validators: validateDateRange()
      });
    });
  }

  async findPropertyById() {
    this.property = await this.propertyService.findPropertyById(this.propertyId).toPromise();
  }

  async findServiceFees() {
    this.serviceFees = await this.serviceFeeService.getAllServiceFee().toPromise();
  }

  getImageByPropertyId() {
    this.propertyImageService.getImageByPropertyId(this.propertyId).subscribe(item => {
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

    if (this.userId == null) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Please log in before booking',
        showConfirmButton: true,
      });
    }

    if (this.bookingForm.valid) {
      this.bookingService?.createBooking(this.bookingForm.value).subscribe(item => {
        Swal.fire({
          icon: 'success',
          iconColor: 'darkorange',
          title: 'Added new booking successfully',
          confirmButtonText: 'Confirm',
          confirmButtonColor: 'darkorange'
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
