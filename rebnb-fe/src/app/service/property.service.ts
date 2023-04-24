import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Property} from '../model/property';

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

  findPropertyById(propertyId: string): Observable<Property> {
    return this.http.get<Property>(`${API_URL}/${propertyId}`);
  }
}
