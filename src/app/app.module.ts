import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './route/app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './componentes/ui/input/input.component';
import { AdminModule } from './modules/admin/admin.module';
import { LoginModule } from './componentes/login/login.module';
import { FoodStationModule } from './modules/food-station/food-station.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FoodStationModule,
    LoginModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
