import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component'
import { SharedModule } from '../shared.module'
import { HomeComponent } from './home/home.component'
import { FoodStationRoutingModule } from './food-station-routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FoodStationRoutingModule,
    SharedModule
  ]
})
export class FoodStationModule { }
