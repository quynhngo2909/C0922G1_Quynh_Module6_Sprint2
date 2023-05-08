import { Component, OnInit } from '@angular/core';
import {Booking} from '../../model/booking';
import {BookingService} from '../../service/booking.service';
import {ShareService} from '../../service/share.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reservation-booked',
  templateUrl: './reservation-booked.component.html',
  styleUrls: ['./reservation-booked.component.css']
})
export class ReservationBookedComponent implements OnInit {
  userId: number;
  bookedTrips: Booking[];
  mess = '';
  page = 0;
  totalPages: number;

  showedPages: number;
  pageList: number[];

  constructor(private bookingService: BookingService,
              private shareService: ShareService,
              private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = +params.get('userId');
      this.getBookedTrips();
    });
  }

  getBookedTrips() {
    this.mess = '';
    this.bookingService.getNonUnpaidBookingPages(this.userId, this.page).subscribe(items => {
      if (items === null) {
        this.mess = 'There is no booked trip. Let create new fabulous trips!';
        this.bookedTrips = null;
      }

      if (items !== null) {
        this.bookedTrips = items.content;
        this.totalPages = items.totalPages;
        this.page = items.number;
      }

      this.getPageList();

    }, () => {
      this.route.navigateByUrl('/error').then(() => true);
    });
  }

  previousPage() {
    this.page = this.shareService.previousPage(this.page);
    this.getBookedTrips();
  }

  nextPage() {
    this.page = this.shareService.nextPage(this.page, this.totalPages);
    this.getBookedTrips();
  }

  getPageList() {
    this.showedPages = 4;
    this.pageList = this.shareService.getPageList(this.page, this.showedPages, this.totalPages);
  }

  goToPage(pageNumber: number) {
    this.page = this.shareService.goToPage(pageNumber);
    this.getBookedTrips();
  }

}
