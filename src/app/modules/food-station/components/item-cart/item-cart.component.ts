import { Component, Input } from '@angular/core'
import { IProduct } from '../../../../interfaces/IProduct'
import { BagService } from '../../services/bag.service'

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss']
})
export class ItemCartComponent {
  @Input() item: IProduct = {
    price: 0,
    image: '',
    quantity: 0,
    title: '',
    id: 0,
    category: '',
    rating: {
      rate: 0,
      count: 0
    },
    description: ''
  }

  constructor (private cartService: BagService) {}

  addOneToItem(id: number): void {
    console.log(id)
    this.cartService.updateQuantity(id, 1)
  }

  deleteOneToItem(item: IProduct): void {
    if (item.quantity === 1) {
      this.deleteItem(item.id!)
    } else {
      this.cartService.updateQuantity(item.id!, -1)
    }
  }

  deleteItem(id: number): void {
    this.cartService.removeFromCart(id)
  }
}
