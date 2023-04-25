import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../security-authentication/service/token-storage.service';
import {ShareService} from '../security-authentication/service/share.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../security-authentication/service/login.service';

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

  loginForm: FormGroup;
  // username: string;
  roles: string[] = [];
  returnUrl: string;

  constructor(private tokenStorageService: TokenStorageService,
              private shareService: ShareService,
              private router: Router,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
    });
    this.loadHeader();

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

    if (this.tokenStorageService.getToken()) {
      const user = this.tokenStorageService.getUser();
      this.loginService.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
      this.username = this.tokenStorageService.getUser().username;
    }
  }

  toggleDropDown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  loadHeader(): void {
    if (this.tokenStorageService.getToken()) {
      // this.currentUser = this.tokenStorageService.getUser().username;
      this.role = this.tokenStorageService.getUser().roles[0];
      this.username = this.tokenStorageService.getUser().username;
    }
    this.isLoggedIn = this.username != null;
    this.getUsernameAccount();
    this.getUserImage();
  }

  getUsernameAccount() {
    if (this.tokenStorageService.getToken()) {
      this.nameEmployee = this.tokenStorageService.getUser().name;
    }
  }


  getUserImage() {
    if (this.tokenStorageService.getToken()) {
      this.userImage = this.tokenStorageService.getUser().image;
    }
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
        this.roles = this.tokenStorageService.getUser().roles;
        this.loginForm.reset();
        Swal.fire({
          text: 'Logged in successfully',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
        // this.router.navigateByUrl('/homepage');
        this.shareService.sendClickEvent();
      },
      err => {
        // this.errorMessage = err.error.message;
        this.loginService.isLoggedIn = false;
        Swal.fire({
          text: 'Account or password is incorrect or not activated!',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  }
}
