import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BookingService} from '../../service/booking.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Booking} from '../../model/booking';
import {render} from 'creditcardpayments/creditCardPayments';
import {newArray} from '@angular/compiler/src/util';

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
  isBooking1Paid: boolean;
  isBooking2Paid: boolean;
  isBooking3Paid: boolean;
  isBooking4Paid: boolean;
  mess = '';
  page = 0;
  totalPages: number;
  isCalledPayPal = false;

  bookingPrice4: number;

  showedPages: number;
  pageList: number[];

  constructor(private bookingService: BookingService,
              private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = +params.get('userId');
      this.getUnpaidBooking();
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
        this.totalPages = items.totalPages;
        this.page = items.number;
        if (items.content.length === 4) {
          this.unpaidBooking1 = this.unpaidBookingList[0];
          this.unpaidBooking2 = this.unpaidBookingList[1];
          this.unpaidBooking3 = this.unpaidBookingList[2];
          this.unpaidBooking4 = this.unpaidBookingList[3];
        }

        if (items.content.length === 3) {
          this.unpaidBooking1 = this.unpaidBookingList[0];
          this.unpaidBooking2 = this.unpaidBookingList[1];
          this.unpaidBooking3 = this.unpaidBookingList[2];
          this.unpaidBooking4 = null;
        }

        if (items.content.length === 2) {
          this.unpaidBooking1 = this.unpaidBookingList[0];
          this.unpaidBooking2 = this.unpaidBookingList[1];
          this.unpaidBooking3 = null;
          this.unpaidBooking4 = null;
        }

        if (this.unpaidBookingList.length === 1) {
          this.unpaidBooking1 = this.unpaidBookingList[0];
          this.unpaidBooking2 = null;
          this.unpaidBooking3 = null;
          this.unpaidBooking4 = null;
        }
      }

      this.getPageList();

    }, () => {
      this.route.navigateByUrl('/error').then(() => true);
    });
  }

  setUnpaidBooking() {
    // this.isBooking1Paid = true;
    // this.isBooking2Paid = true;
    // this.isBooking3Paid = true;
    // this.isBooking4Paid = true;
    this.isCalledPayPal = false;
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
    }
    this.getUnpaidBooking();
    this.setUnpaidBooking();
  }

  nextPage() {
    if (this.page < this.totalPages - 1) {
      this.page++;
    }
    this.getUnpaidBooking();
    this.setUnpaidBooking();
  }

  getPageList() {
    this.showedPages = 4;
    const startPage = Math.max(0, this.page - Math.floor(this.showedPages / 2));
    const endPage = (startPage + this.showedPages - 1) >= this.totalPages ? (this.totalPages - 1) : (startPage + this.showedPages - 1);
    if (endPage <= this.totalPages - this.showedPages) {
      this.pageList = Array.from({length: this.showedPages <= this.totalPages ? this.showedPages : this.totalPages}, (_, i: number) => i + startPage + 1);
    }
    if (endPage > this.totalPages - this.showedPages) {
      this.pageList = Array.from({length: endPage - startPage + 1}, (_, i: number) => i + startPage + 1);
    }
  }

  goToPage(pageNumber: number | string) {
    if (typeof pageNumber === 'number') {
      this.page = pageNumber - 1;
    }
    this.getUnpaidBooking();
    this.setUnpaidBooking();
  }

  getPayPal() {
    this.isCalledPayPal = !this.isCalledPayPal;
    this.getPayPal1();
    this.getPayPall2();
    this.getPayPall3();
    this.getPayPall4();
  }

  getPayPal1() {
    this.isBooking1Paid = false;
    render(
      {
        id: '#paypal-button-container-unpaidBooking1',
        currency: 'USD',
        value: this.unpaidBooking1.totalPrice.toString(),
        onApprove: (details) => {
          alert('Transaction successful');
          this.isBooking1Paid = true;
          this.bookingService.updatePaidBooking(this.unpaidBooking1.bookingId).subscribe();
          alert(this.unpaidBooking1.bookingId);
        }
      }
    );
  }

  getPayPall2() {
    this.isBooking2Paid = false;
    render(
      {
        id: '#paypal-button-container-unpaidBooking2',
        currency: 'USD',
        value: this.unpaidBooking2.totalPrice.toString(),
        onApprove: (details) => {
          alert('Transaction successful');
          this.isBooking2Paid = true;
          this.bookingService.updatePaidBooking(this.unpaidBooking2.bookingId).subscribe();
          alert(this.unpaidBooking2.bookingId);
        }
      }
    );
  }

  getPayPall3() {
    this.isBooking3Paid = false;
    render(
      {
        id: '#paypal-button-container-unpaidBooking3',
        currency: 'USD',
        value: this.unpaidBooking3.totalPrice.toString(),
        onApprove: (details) => {
          alert('Transaction successful');
          this.isBooking3Paid = true;
          this.bookingService.updatePaidBooking(this.unpaidBooking3.bookingId).subscribe();
          alert(this.unpaidBooking3.bookingId);
        }
      }
    );
  }

  getPayPall4() {
    // this.bookingPrice4 = this.unpaidBooking4.totalPrice;
    this.isBooking4Paid = false;
    render(
      {
        id: '#paypal-button-container-unpaidBooking4',
        currency: 'USD',
        value: this.unpaidBooking4.totalPrice.toPrecision(),
        // value: this.bookingPrice4.toPrecision(),
        onApprove: (details) => {
          alert('Transaction successful');
          this.isBooking4Paid = true;
          this.bookingService.updatePaidBooking(this.unpaidBooking4.bookingId).subscribe();
          alert(this.unpaidBooking4.bookingId);
        }
      }
    );
  }

  // getBookingPrice(id: number): number {
  //   let bookingPrice = 0;
  //   this.bookingService.findUnpaidBookingById(id).subscribe(item => {
  //     bookingPrice = item.totalPrice;
  //   });
  //   return bookingPrice;
  // }
}
