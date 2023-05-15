import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../security-authentication/service/token-storage.service';
import {ShareService} from '../service/share.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../security-authentication/service/login.service';
import {BookingService} from '../service/booking.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDropDownOpen = false;
  isLoggedIn = false;
  role: string;
  nameEmployee: string;
  username: string;
  userImage: string;
  userId: number;
  unpaidBooking: number;
  guest: number;

  searchedDestination = '';
  private searchDestinationSubscription: Subscription;

  loginForm: FormGroup;
  roles: string[] = [];

  constructor(private tokenStorageService: TokenStorageService,
              private shareService: ShareService,
              private router: Router,
              private loginService: LoginService) {
  }

  ngOnInit() {
    this.searchDestinationSubscription = this.shareService.searchDestination$.subscribe(searchValue => {
      this.searchedDestination = searchValue;
    });

    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
      if (this.isLoggedIn) {
        this.shareService.setUnpaidBooking(this.userId);
        this.unpaidBooking = this.shareService.getUnpaidBooking();
        this.shareService.getUnpaidBookingSubject().subscribe(quantity => {
          this.unpaidBooking = quantity;
        });
      }
    });
    this.loadHeader();
    if (this.isLoggedIn) {
      this.shareService.setUnpaidBooking(this.userId);
      this.unpaidBooking = this.shareService.getUnpaidBooking();
      this.shareService.getUnpaidBookingSubject().subscribe(quantity => {
        this.unpaidBooking = quantity;
      });
    }

    if (this.loginService.isLoggedIn) {
      Swal.fire({
        text: 'Already logged in!',
        icon: 'warning',
        showConfirmButton: false,
        timer: 1000
      });
      this.router.navigateByUrl('/');
    }

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
      rememberMe: new FormControl()
    });
  }

  toggleDropDown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  async loadHeader(): Promise<void> {

    if (this.tokenStorageService.getToken()) {
      this.role = this.tokenStorageService.getUser().roles[0];
      this.username = this.tokenStorageService.getUser().username;
    }
    this.isLoggedIn = this.username != null;
    this.nameEmployee = this.shareService.getUsernameAccount();
    this.userImage = this.shareService.getUserImage();
    this.userId = this.shareService.getUserId();
  }

  async logOut() {
    this.tokenStorageService.signOut();
    this.shareService.sendClickEvent();
    await Swal.fire({
      text: 'Logged out successfully',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    });
    await this.router.navigateByUrl('/');
    location.reload();
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value).subscribe(
      data => {
        if (this.loginForm.value.rememberMe) {
          this.tokenStorageService.saveTokenLocal(data.accessToken);
          this.tokenStorageService.saveUserLocal(data);
        } else {
          this.tokenStorageService.saveTokenSession(data.accessToken);
          this.tokenStorageService.saveUserLocal(data);
        }

        this.loginService.isLoggedIn = true;
        this.username = this.tokenStorageService.getUser().username;
        this.loginForm.reset();
        Swal.fire({
          text: 'Logged in successfully',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigateByUrl('/homepage');
        this.shareService.sendClickEvent();
      },
      err => {
        this.loginService.isLoggedIn = false;
        Swal.fire({
          text: 'Account or password is incorrect or not activated!',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  }

  search(destination) {
    this.shareService.setSearchDestination(destination);
  }
}
