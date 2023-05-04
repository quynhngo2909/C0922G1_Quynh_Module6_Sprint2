import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Booking} from '../model/booking';

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
}
