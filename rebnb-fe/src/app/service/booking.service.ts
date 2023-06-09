import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Booking} from '../model/booking';
import {Observable} from 'rxjs';
import {PageJson} from '../model/page-json';

const API_URL = `${environment.apiUrl}` + '/api';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) {
  }

  createBooking(booking: Booking) {
    return this.http.post(`${API_URL}/user/create-booking`, booking);
  }

  getUnpaidBookingQty(tenantId: number): Observable<number> {
    return this.http.get<number>(`${API_URL}/user/unpaid-booking/${tenantId}`);
  }

  getUnpaidBookingPages(tenantId: number, page: number): Observable<PageJson> {
    return this.http.get<PageJson>(`${API_URL}/user/unpaid-booking-list/${tenantId}?page=${page}`);
  }

  updatePaidBooking(bookingId: number): Observable<any> {
    return this.http.get<any>(`${API_URL}/user/update-paid-status/${bookingId}`);
  }

  findUnpaidBookingById(bookingId: number): Observable<Booking> {
    return this.http.get<Booking>(`${API_URL}/user/get-unpaid-booking/${bookingId}`);
  }

  updateBooking(booking: Booking) {
    return this.http.post(`${API_URL}/user/update-booking`, booking);
  }

  getNonUnpaidBookingPages(tenantId: number, page: number): Observable<PageJson> {
    return this.http.get<PageJson>(`${API_URL}/user/non-unpaid-booking-list/${tenantId}?page=${page}`);
  }

  getAllBookedDateByPropertyId(propertyId: number): Observable<Date[]> {
  return  this.http.get<[]>(`${API_URL}/public/booked-date-list/${propertyId}`);
  }
}
