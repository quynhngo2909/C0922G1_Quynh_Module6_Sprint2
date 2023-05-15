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
import {render} from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  isLoggedIn = false;
  role: string;
  userId: number;

  booking: Booking;
  property: Property;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;

  stayNights = 0;
  serviceFee: ServiceFee;
  isBookingPaid: boolean;

  constructor(private propertyService: PropertyService,
              private propertyImageService: PropertyImageService,
              private serviceFeeService: ServiceFeeService,
              private shareService: ShareService,
              private bookingService: BookingService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) {
    this.isBookingPaid = false;
  }

  ngOnInit(): void {
    this.isBookingPaid = false;
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
      this.serviceFee = await this.serviceFeeService.findServiceFeeById(this.booking.serviceFeeId).toPromise();
      this.stayNights = (new Date(this.booking?.checkOutDate).getTime() - new Date(this.booking?.checkInDate).getTime()) / (1000 * 60 * 60 * 24);
      this.getImageByPropertyId();
      render(
        {
          id: '#paypal-button',
          currency: 'USD',
          value: this.booking.totalPrice.toPrecision(),
          onApprove: (details) => {
            Swal.fire({
              icon: 'success',
              iconColor: 'darkorange',
              title: 'Paid booking successfully',
              confirmButtonText: 'Confirm',
              confirmButtonColor: 'darkorange'
            });
            this.isBookingPaid = true;
            this.bookingService.updatePaidBooking(this.booking.bookingId).subscribe(() => {
              this.shareService.setUnpaidBooking(this.userId);
            });
          }
        }
      );
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

}
