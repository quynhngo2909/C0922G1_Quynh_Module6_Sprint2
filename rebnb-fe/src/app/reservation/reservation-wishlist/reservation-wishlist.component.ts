import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BookingService} from '../../service/booking.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Booking} from '../../model/booking';
import {render} from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-reservation-wishlist',
  templateUrl: './reservation-wishlist.component.html',
  styleUrls: ['./reservation-wishlist.component.css']
})
export class ReservationWishlistComponent implements OnInit {
  userId: number;
  unpaidBookingList: Booking[];
  unpaidBooking1: Booking;
  unpaidBooking2: Booking;
  unpaidBooking3: Booking;
  unpaidBooking4: Booking;
  isBooking1Paid = false;
  isBooking2Paid = false;
  isBooking3Paid = false;
  isBooking4Paid = false;
  mess = '';
  page = 0;
  totalPages: number;
  isCalledPayPal = false;

  constructor(private bookingService: BookingService,
              private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private route: Router,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(async params => {
      this.userId = await +params.get('userId');
      await this.getUnpaidBooking();
    });
  }

  getUnpaidBooking() {
    this.mess = '';
    this.bookingService.getUnpaidBookingPages(this.userId, this.page).subscribe(items => {
      if (items === null) {
        this.mess = 'Let create your wishlist!';
        this.unpaidBookingList = null;
      }

      if (items !== null) {
        this.unpaidBookingList = items.content;
        this.unpaidBooking1 = this.unpaidBookingList[0];
        this.unpaidBooking2 = this.unpaidBookingList[1];
        this.unpaidBooking3 = this.unpaidBookingList[2];
        this.unpaidBooking4 = this.unpaidBookingList[3];
        this.totalPages = items.totalPages;
      }
    }, () => {
      this.route.navigateByUrl('/error').then(() => true);
    });
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
    }
    this.getUnpaidBooking();
  }

  nextPage() {
    if (this.page < this.totalPages - 1) {
      this.page++;
    }
    this.getUnpaidBooking();
  }

  goToPage(pageNumber: number | string) {
    if (typeof pageNumber === 'number') {
      this.page = pageNumber - 1;
    }
    this.getUnpaidBooking();
  }


  getPayPal() {
    this.isCalledPayPal = !this.isCalledPayPal;
    this.getPayPal1();
    this.getPayPall2();
    this.getPayPall3();
    this.getPayPall4();
  }

  getPayPal1() {
    render(
      {
        id: '#paypal-button-container-unpaidBooking1',
        currency: 'USD',
        value: this.unpaidBooking1.totalPrice.toFixed(),
        onApprove: (details) => {
          alert('Transaction successful');
          this.isBooking1Paid = true;
        }
      }
    );
  }

  getPayPall2() {
    render(
      {
        id: '#paypal-button-container-unpaidBooking2',
        currency: 'USD',
        value: this.unpaidBooking2.totalPrice.toFixed(),
        onApprove: (details) => {
          alert('Transaction successful');
          this.isBooking2Paid = true;
        }
      }
    );
  }

  getPayPall3() {
    render(
      {
        id: '#paypal-button-container-unpaidBooking3',
        currency: 'USD',
        value: this.unpaidBooking3.totalPrice.toFixed(),
        onApprove: (details) => {
          alert('Transaction successful');
          this.isBooking3Paid = true;
        }
      }
    );
  }

  getPayPall4() {
    render(
      {
        id: '#paypal-button-container-unpaidBooking4',
        currency: 'USD',
        value: this.unpaidBooking4.totalPrice.toFixed(),
        onApprove: (details) => {
          alert('Transaction successful');
          this.isBooking4Paid = true;
        }
      }
    );
  }
}
