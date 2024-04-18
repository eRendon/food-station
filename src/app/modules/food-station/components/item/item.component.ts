import { Component, Input } from '@angular/core'
import { IProduct } from '../../../../interfaces/IProduct'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item:IProduct = {
    description: '',
    price: 0,
    name: '',
    quantity: 0
  }
}
