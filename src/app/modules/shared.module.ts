import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../componentes/ui/button/button.component'
import { TableComponent } from '../componentes/ui/table/table.component'
import { CardComponent } from '../componentes/ui/card/card.component'
import { ModalComponent } from '../componentes/ui/modal/modal.component'



@NgModule({
  declarations: [
    ButtonComponent,
    TableComponent,
    CardComponent,
    ModalComponent
  ],
  exports: [
    ButtonComponent,
    TableComponent,
    CardComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
