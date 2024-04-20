import { Component, OnInit } from '@angular/core'
import { BagService } from '../../services/bag.service'
import { IProduct } from '../../../../interfaces/IProduct'
import { LocalStoreService } from '../../../../services/localStore/local-store.service'
import { AuthService } from '../../../../services/auth/auth.service'
import { AlertService } from '../../../../services/alert/alert.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: IProduct[] = []
  subtotal: number = 0
  shipping: number = 15000
  tax: number = 25000
  total: number = 0
  constructor (private cartService: BagService,
               private localStoreService: LocalStoreService,
               private authService: AuthService,
               private alertService: AlertService
  ) {}

  ngOnInit () {
    this.localStoreItems()
    this.getItemsCart()
  }

  getItemsCart(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.items = items
      this.subtotal = items.reduce((acc, product) => acc + (product.price * product.quantity!), 0)
      this.total = this.subtotal + this.tax + this. shipping
    })
  }

  localStoreItems(): void {
    const cartItems = this.localStoreService.getData<IProduct[]>('cartItems')
    if (cartItems) {
      this.cartService.setCartItems(cartItems)
    }
  }

  totalItems(): number {
    return this.items.reduce((acc, product) => acc + product.quantity!, 0)
  }

  checkout(): void {
    if (!this.authService.isLoggedInStatic()) {
     this.alertService.error('Por favor regístrese antes de proceder con su pago.')
    }
  }
}
