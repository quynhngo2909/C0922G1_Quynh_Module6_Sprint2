import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {TokenStorageService} from '../security-authentication/service/token-storage.service';
import {ServiceFee} from '../model/service-fee';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private tokenStorageService: TokenStorageService) {
  }

  private subject = new Subject<any>();

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
