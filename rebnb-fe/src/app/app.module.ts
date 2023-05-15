import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthInterceptor} from './security-authentication/security-auth/auth.interceptor';
// import {InfiniteScrollModule} from 'ngx-infinite-scroll';

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
        FormsModule,
        // InfiniteScrollModule

    ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
