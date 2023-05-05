import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReservationWishlistComponent} from './reservation-wishlist/reservation-wishlist.component';
import {ReservationBookedComponent} from './reservation-booked/reservation-booked.component';


const routes: Routes = [{
  path: 'wishlist/:userId',
  component: ReservationWishlistComponent,
}, {
  path: 'booked',
  component: ReservationBookedComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
