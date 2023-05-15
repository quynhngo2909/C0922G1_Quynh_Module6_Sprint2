import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Property} from '../model/property';
import {Booking} from '../model/booking';
import {PageJson} from '../model/page-json';

const API_URL = `${environment.apiUrl}` + `/api/public/properties`;

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) {
  }

  getAllProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(API_URL);
  }

  getPropertyPages(page: number): Observable<PageJson> {
    return this.http.get<PageJson>(`${API_URL}/pages?page=` + page);
  }

  findPropertyById(propertyId: number): Observable<Property> {
    return this.http.get<Property>(`${API_URL}/${propertyId}`);
  }

  getPropertyPagesByCategoryId(page: number, categotyId: number): Observable<PageJson> {
    return this.http.get<PageJson>(`${API_URL}/find_by_category_id/${categotyId}?page=` + page);
  }

  getPropertyPagesByLocation(page: number, location: string): Observable<PageJson> {
    return this.http.get<PageJson>(`${API_URL}/find_by_location?page=${page}&country=${location}&region=${location}&city=${location}`);
  }

  getPropertyByCategoryIdAbdLocation(page: number, categotyId: number, location: string): Observable<PageJson> {
    return this.http.get<PageJson>(`${API_URL}/find_by_category_id_and_location/${categotyId}?page=${page}&country=${location}&region=${location}&city=${location}`);
  }
}
