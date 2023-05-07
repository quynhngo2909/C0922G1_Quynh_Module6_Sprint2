import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ServiceFee} from '../model/service-fee';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}` + '/api/public/service_fee';

@Injectable({
  providedIn: 'root'
})


export class ServiceFeeService {

  constructor(private http: HttpClient) {
  }

  public getAllServiceFee(): Observable<ServiceFee[]> {
    return this.http.get<ServiceFee[]>(API_URL);
  }

  public findServiceFeeById(id: number): Observable<ServiceFee> {
    return this.http.get<ServiceFee>(`${API_URL}/${id}`);
  }
}
