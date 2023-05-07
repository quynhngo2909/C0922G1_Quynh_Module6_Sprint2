import {Component, OnInit} from '@angular/core';
import {BookingService} from '../../service/booking.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Booking} from '../../model/booking';
import {ShareService} from '../../service/share.service';

@Component({
  selector: 'app-reservation-wishlist',
  templateUrl: './reservation-wishlist.component.html',
  styleUrls: ['./reservation-wishlist.component.css']
})
export class ReservationWishlistComponent implements OnInit {
  userId: number;
  unpaidBookingList: Booking[];
  isBooking1Paid: boolean;
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
      }

      this.getPageList();

    }, () => {
      this.route.navigateByUrl('/error').then(() => true);
    });
  }

  previousPage() {
    this.page = this.shareService.previousPage(this.page);
    this.getUnpaidBooking();
  }

  nextPage() {
    this.page = this.shareService.nextPage(this.page, this.totalPages);
    this.getUnpaidBooking();
  }

  getPageList() {
    this.showedPages = 4;
    this.pageList = this.shareService.getPageList(this.page, this.showedPages, this.totalPages);
  }

  goToPage(pageNumber: number) {
    this.page = this.shareService.goToPage(pageNumber);
    this.getUnpaidBooking();
  }
}
