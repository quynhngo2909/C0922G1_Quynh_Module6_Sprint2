import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PropertiesRoutingModule} from './properties-routing.module';
import {PropertyListComponent} from './property-list/property-list.component';
import {PropertyDetailComponent} from './property-detail/property-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
// import {InfiniteScrollModule} from 'ngx-infinite-scroll';


@NgModule({
  declarations: [PropertyListComponent, PropertyDetailComponent],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    ReactiveFormsModule,
    // InfiniteScrollModule
  ]
})
export class PropertiesModule {
}
