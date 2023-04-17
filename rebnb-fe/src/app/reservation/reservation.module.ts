import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationWishlistComponent } from './reservation-wishlist/reservation-wishlist.component';
import { ReservationBookedComponent } from './reservation-booked/reservation-booked.component';


@NgModule({
  declarations: [ReservationWishlistComponent, ReservationBookedComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule
  ]
})
export class ReservationModule { }
