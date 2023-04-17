import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'homepage',
  loadChildren: () => import('./properties/properties.module')
    .then(module => module.PropertiesModule)
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'homepage'
}, {
  path: 'security',
  loadChildren: () => import('./security-authentication/security-authentication.module')
    .then(module => module.SecurityAuthenticationModule)
}, {
  path: 'reservation',
  loadChildren: () => import('./reservation/reservation.module')
    .then(module => module.ReservationModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
