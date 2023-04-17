import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';


const routes: Routes = [{
  path: 'homepage',
  component: HomePageComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'homepage'
}, {
  path: 'security',
  loadChildren: () => import('./security-authentication/security-authentication.module')
    .then(module => module.SecurityAuthenticationModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
