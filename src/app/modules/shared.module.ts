import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../componentes/ui/button/button.component'
import { TableComponent } from '../componentes/ui/table/table.component'
import { CardComponent } from '../componentes/ui/card/card.component'
import { ModalComponent } from '../componentes/ui/modal/modal.component';
import { SwiperComponent } from '../componentes/ui/swipper/swiper.component'
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ItemComponent } from './food-station/components/item/item.component'

@NgModule({
  declarations: [
    ButtonComponent,
    TableComponent,
    CardComponent,
    ModalComponent,
    SwiperComponent,
    ItemComponent
  ],
  exports: [
    ButtonComponent,
    TableComponent,
    CardComponent,
    ModalComponent,
    SwiperComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ]
})
export class SharedModule { }
