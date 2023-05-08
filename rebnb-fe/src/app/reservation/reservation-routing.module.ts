import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReservationWishlistComponent} from './reservation-wishlist/reservation-wishlist.component';
import {ReservationBookedComponent} from './reservation-booked/reservation-booked.component';
import {PaymentComponent} from './payment/payment.component';
import {EditBookingComponent} from './payment/edit-booking/edit-booking.component';


const routes: Routes = [{
  path: 'wishlist/:userId',
  component: ReservationWishlistComponent,
}, {
  path: 'booked/:userId',
  component: ReservationBookedComponent,
}, {
  path: 'edit/:bookingId',
  component: EditBookingComponent,
}, {
  path: 'payment/:bookingId',
  component: PaymentComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
