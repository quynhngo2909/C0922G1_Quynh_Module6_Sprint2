import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../service/login.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../service/token-storage.service';
import {ShareService} from '../../service/share.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username: string;
  roles: string[] = [];
  returnUrl: string;

  constructor(private loginService: LoginService,
              private router: Router,
              private tokenStorageService: TokenStorageService,
              private shareService: ShareService) {}

  ngOnInit(): void {
    if (this.loginService.isLoggedIn) {
      Swal.fire({
        text: 'Already logged in!',
        icon: 'warning',
        showConfirmButton: false,
        timer: 1000
      });
      this.router.navigateByUrl('/');
    }
    this.view();
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

  view(): void {
    const element = document.getElementById('login');
    if (element) {
      element.scrollIntoView();
    }
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
        this.router.navigateByUrl('/homepage');
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
