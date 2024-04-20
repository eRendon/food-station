import { Component, Input } from '@angular/core'
import { IProduct } from '../../../../interfaces/IProduct'
import { BagService } from '../../services/bag.service'
import { AlertService } from '../../../../services/alert/alert.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item:IProduct = {
    rating: {
      rate: 0,
      count: 0
    },
    description: '',
    price: 0,
    image: '',
    title: '',
    category: '',
    id: 10
  }

  constructor (private cartService: BagService, private alertService: AlertService) {}

  addItem(item: IProduct): void {
    item.quantity = 1
    this.cartService.addToCart(item)
    this.alertService.success('Se ha agregado el item a su carrito.')
  }
}
