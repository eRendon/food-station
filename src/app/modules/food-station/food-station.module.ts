import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component'
import { SharedModule } from '../shared.module'
import { HomeComponent } from './pages/home/home.component'
import { FoodStationRoutingModule } from './food-station-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { ItemCartComponent } from './components/item-cart/item-cart.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    CartComponent,
    ItemCartComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FoodStationRoutingModule,
    SharedModule
  ]
})
export class FoodStationModule { }
