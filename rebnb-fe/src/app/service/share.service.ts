import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {TokenStorageService} from '../security-authentication/service/token-storage.service';
import {ServiceFee} from '../model/service-fee';
import {BookingService} from './booking.service';
import {ServiceFeeService} from './service-fee.service';
import {FormBuilder, Validators} from '@angular/forms';
import {checkAvailableCheckIn, checkAvailableCheckOut, checkAvailableDate, validateDateRange} from '../validation/booking.validator';
import {Booking} from '../model/booking';
import {Property} from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private unpaidBooking: number;
  private searchDestinationSubject = new BehaviorSubject<string>('');
  public searchDestination$ = this.searchDestinationSubject.asObservable();
  private destination = '';
  private guest: number;
  private unpaidBookingSubject = new Subject<number>();

  private subject = new Subject<any>();

  constructor(private tokenStorageService: TokenStorageService,
              private bookingService: BookingService,
              private serviceFeeService: ServiceFeeService,
              private fb: FormBuilder) {
  }

  setSearchDestination(searchDestination: string) {
    this.searchDestinationSubject.next(searchDestination);
  }


  setUnpaidBooking(tenantId: number): void {
    this.bookingService.getUnpaidBookingQty(tenantId).subscribe(items => {
      this.unpaidBooking = items;
      this.unpaidBookingSubject.next(this.unpaidBooking);
    });
  }

  getUnpaidBooking(): number {
    return this.unpaidBooking;
  }

  getUnpaidBookingSubject(): Subject<number> {
    return this.unpaidBookingSubject;
  }

  sendClickEvent() {
    this.subject.next();
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  getUserRole(): string {
    if (this.tokenStorageService.getToken()) {
      return this.tokenStorageService.getUser().roles[0];
    }
    return null;
  }

  getLogInStatus(): boolean {
    if (this.tokenStorageService.getToken()) {
      return this.tokenStorageService.getUser().roles[0] != null;
    }
    return false;
  }

  getUserId(): number {
    if (this.tokenStorageService.getToken()) {
      return this.tokenStorageService.getUser().userId;
    }

    return null;
  }

  getUserImage() {
    if (this.tokenStorageService.getToken()) {
      return this.tokenStorageService.getUser().image;
    }
    return null;
  }

  getUsernameAccount() {
    if (this.tokenStorageService.getToken()) {
      return this.tokenStorageService.getUser().name;
    }
    return null;
  }

  getServiceFee(serviceFees: ServiceFee[], stayNights: number): ServiceFee {
    let serviceFee = null;
    for (let i = serviceFees.length - 1; i >= 0; i--) {
      if (stayNights >= serviceFees[i].rentalNight) {
        serviceFee = serviceFees[i];
        return serviceFee;
      }
      return serviceFees[i];
    }
  }

  previousPage(page: number): number {
    if (page > 0) {
      page--;
    }
    return page;
  }

  nextPage(page: number, totalPages: number): number {
    if (page < totalPages - 1) {
      page++;
    }
    return page;
  }

  getPageList(page: number, showedPages: number, totalPages: number): number[] {
    const startPage = Math.max(0, page - Math.floor(showedPages / 2));
    const endPage = (startPage + showedPages - 1) >= totalPages ? (totalPages - 1) : (startPage + showedPages - 1);
    if (endPage <= totalPages - showedPages) {
      return Array.from({length: showedPages <= totalPages ? showedPages : totalPages}, (_, i: number) => i + startPage + 1);
    } else {
      return Array.from({length: endPage - startPage + 1}, (_, i: number) => i + startPage + 1);
    }
  }


  goToPage(pageNumber: number) {
    return pageNumber - 1;
  }

  createBookingForm(property: Property, booking: Booking, bookedDates: Date[], userId: number, serviceFee: ServiceFee) {
    const bookingForm = this.fb?.group({
      checkInDate: [booking?.checkInDate,
        Validators.compose([Validators.required, checkAvailableCheckIn(bookedDates)])],
      checkOutDate: [booking?.checkOutDate,
        Validators.compose([Validators.required, checkAvailableCheckOut(bookedDates)])],
      guest: [1, Validators.compose([Validators.required, Validators.max(property.maxGuest)])],
      deposit: [0],
      totalPrice: [0, Validators.compose([Validators.required])],
      propertyId: [property?.id, Validators.compose([Validators.required])],
      tenantId: [userId, Validators.compose([Validators.required])],
      serviceFee: [serviceFee, Validators.compose([Validators.required])],
    }, {
      validators: [validateDateRange(), checkAvailableDate(bookedDates)]
    });

    return bookingForm;
  }

  createEditBookingForm(property: Property, booking: Booking, bookedDates: Date[], serviceFee: ServiceFee) {
    const bookingForm = this.fb?.group({
      bookingId: [booking?.bookingId, Validators.compose([Validators.required])],
      checkInDate: [booking?.checkInDate, Validators.compose([Validators.required, checkAvailableCheckIn(bookedDates)])],
      checkOutDate: [booking?.checkOutDate, Validators.compose([Validators.required, checkAvailableCheckOut(bookedDates)])],
      guest: [booking?.guest, Validators.compose([Validators.required, Validators.max(property.maxGuest)])],
      deposit: [booking?.deposit],
      totalPrice: [booking?.totalPrice, Validators.compose([Validators.required])],
      propertyId: [booking?.propertyId, Validators.compose([Validators.required])],
      tenantId: [booking?.tenantId, Validators.compose([Validators.required])],
      serviceFee: [serviceFee, Validators.compose([Validators.required])],
    }, {
      validators: validateDateRange()
    });
    return bookingForm;
  }
}
