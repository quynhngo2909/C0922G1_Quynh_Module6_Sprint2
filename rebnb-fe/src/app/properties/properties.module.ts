import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [PropertyListComponent, PropertyDetailComponent],
    imports: [
        CommonModule,
        PropertiesRoutingModule,
        ReactiveFormsModule
    ]
})
export class PropertiesModule { }
