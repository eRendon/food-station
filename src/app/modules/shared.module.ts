import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../componentes/ui/button/button.component'
import { TableComponent } from '../componentes/ui/table/table.component'
import { CardComponent } from '../componentes/ui/card/card.component'
import { ModalComponent } from '../componentes/ui/modal/modal.component';
import { SwiperComponent } from '../componentes/ui/swipper/swiper.component'
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ItemComponent } from './food-station/components/item/item.component'
import { AlertComponent } from '../componentes/ui/alert/alert.component'
import { LoadingComponent } from '../componentes/ui/loading/loading.component'
import { RegisterComponent } from '../componentes/register/register.component'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { DropdownComponent } from '../componentes/ui/dropdown/dropdown.component'
import { InitialsPipe } from '../pipes/initialsName/initials.pipe'
import { FormatCurrencyPipe } from '../pipes/formatCurrency/format-currency.pipe'

@NgModule({
  declarations: [
    ButtonComponent,
    TableComponent,
    CardComponent,
    ModalComponent,
    SwiperComponent,
    ItemComponent,
    AlertComponent,
    LoadingComponent,
    RegisterComponent,
    DropdownComponent,
    InitialsPipe,
    FormatCurrencyPipe
  ],
  exports: [
    ButtonComponent,
    TableComponent,
    CardComponent,
    ModalComponent,
    SwiperComponent,
    ItemComponent,
    AlertComponent,
    LoadingComponent,
    RegisterComponent,
    DropdownComponent,
    InitialsPipe,
    FormatCurrencyPipe
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterLink,
    ReactiveFormsModule,
    RouterLinkActive,
  ]
})
export class SharedModule { }
