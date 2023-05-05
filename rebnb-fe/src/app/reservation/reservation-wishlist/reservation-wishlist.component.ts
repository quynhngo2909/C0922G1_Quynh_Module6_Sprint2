import {Component, OnInit} from '@angular/core';
import {BookingService} from '../../service/booking.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Booking} from '../../model/booking';

@Component({
  selector: 'app-reservation-wishlist',
  templateUrl: './reservation-wishlist.component.html',
  styleUrls: ['./reservation-wishlist.component.css']
})
export class ReservationWishlistComponent implements OnInit {
  userId: number;
  unpaidBookingList: Booking[];
  mess = '';
  page = 0;
  totalPages: number;

  constructor(private bookingService: BookingService,
              private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = +params.get('userId');
    });
    this.getUnpaidBooking();
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

}
