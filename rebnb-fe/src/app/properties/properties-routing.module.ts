import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PropertyListComponent} from './property-list/property-list.component';
import {PropertyDetailComponent} from './property-detail/property-detail.component';


const routes: Routes = [{
  path: 'properties',
  component: PropertyListComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'properties'
}, {
  path: 'detail/:id',
  component: PropertyDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
