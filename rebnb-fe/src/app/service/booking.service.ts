import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Booking} from '../model/booking';
import {Observable} from 'rxjs';
import {PageJson} from '../model/page-json';

const API_URL = `${environment.apiUrl}` + '/api/public/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) {
  }

  createBooking(booking: Booking) {
    return this.http.post(`${API_URL}/create-booking`, booking);
  }

  getUnpaidBookingQty(tenantId: number): Observable<number> {
    return this.http.get<number>(`${API_URL}/unpaid-booking/${tenantId}`);
  }

  getUnpaidBookingPages(tenantId: number, page: number): Observable<PageJson> {
    return this.http.get<PageJson>(`${API_URL}/unpaid-booking-list/${tenantId}?page=${page}`);
  }
}
