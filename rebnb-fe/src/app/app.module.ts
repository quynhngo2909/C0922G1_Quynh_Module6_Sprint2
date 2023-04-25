import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
