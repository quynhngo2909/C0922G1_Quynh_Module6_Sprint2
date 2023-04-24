import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PropertyImage} from '../model/property-image';
const API_URL = `${environment.apiUrl + '/api/public/property_image'}`;

@Injectable({
  providedIn: 'root'
})
export class PropertyImageService {

  constructor(private http: HttpClient) { }

  getImageByPropertyId(propertyId: string): Observable<PropertyImage[]> {
    return this.http.get<PropertyImage[]>(`${API_URL}/${propertyId}`);
  }
}
