import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../security-authentication/service/token-storage.service';
import {ShareService} from '../service/share.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  isLoggedIn = false;
  role: string;
  userId: number;

  constructor(private tokenStorageService: TokenStorageService,
              private shareService: ShareService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenStorageService.isLogger();

    this.shareService.getClickEvent().subscribe(() => {
      this.userId = this.shareService.getUserId();
      this.role = this.shareService.getUserRole();
      this.isLoggedIn = this.shareService.getLogInStatus();
    });

    this.userId = this.shareService.getUserId();
    this.role = this.shareService.getUserRole();
    this.isLoggedIn = this.shareService.getLogInStatus();
  }

}
