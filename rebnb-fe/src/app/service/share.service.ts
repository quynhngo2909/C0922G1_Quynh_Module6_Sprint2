import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {TokenStorageService} from '../security-authentication/service/token-storage.service';
import {ServiceFee} from '../model/service-fee';
import {BookingService} from './booking.service';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private unpaidBooking: number;
  private unpaidBookingSubject = new Subject<number>();

  private subject = new Subject<any>();

  constructor(private tokenStorageService: TokenStorageService,
              private bookingService: BookingService) {
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
}
