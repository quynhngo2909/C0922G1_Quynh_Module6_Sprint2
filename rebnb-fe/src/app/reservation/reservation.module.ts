import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationWishlistComponent } from './reservation-wishlist/reservation-wishlist.component';
import { ReservationBookedComponent } from './reservation-booked/reservation-booked.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { EditBookingComponent } from './payment/edit-booking/edit-booking.component';


@NgModule({
  declarations: [ReservationWishlistComponent, ReservationBookedComponent, PaymentComponent, EditBookingComponent],
    imports: [
        CommonModule,
        ReservationRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ReservationModule { }
