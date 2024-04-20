import { Injectable } from '@angular/core';
import { IProduct } from '../../../interfaces/IProduct'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { LocalStoreService } from '../../../services/localStore/local-store.service'

@Injectable({
  providedIn: 'root'
})
export class BagService {

  constructor(private localStoreService: LocalStoreService) { }
  private cartItems: IProduct[] = []
  private itemsSubject: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([])
  private quantityNumberSubject: Subject<number> = new Subject<number>()
  cartItems$ = this.itemsSubject.asObservable();
  addToCart(item: IProduct): void {
    const existItem = this.cartItems.find(i => i.id === item.id)
    if (existItem) {
      existItem.quantity = existItem.quantity! + 1
    } else {
      this.cartItems.push(item)
    }
    this.itemsSubject.next(this.cartItems)
    this.quantityNumberSubject.next(this.cartItems.length)
    this.localStoreService.setData<IProduct[]>(this.cartItems, 'cartItems')
  }

  setCartItems(cartItems: IProduct[]): void {
    this.itemsSubject.next(cartItems)
    this.quantityNumberSubject.next(cartItems.length)
    this.cartItems = cartItems
  }

  removeFromCart(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId)
    console.log(this.cartItems)
    this.itemsSubject.next(this.cartItems)
    this.quantityNumberSubject.next(this.cartItems.length)
    this.localStoreService.setData<IProduct[]>(this.cartItems, 'cartItems')
  }

  updateQuantity(itemId: number, quantity: number): void {
    const item = this.cartItems.find(i => i.id === itemId)
    if (item) {
      item.quantity = item.quantity! + quantity
      this.itemsSubject.next(this.cartItems)
      this.quantityNumberSubject.next(this.cartItems.length)
      this.localStoreService.setData<IProduct[]>(this.cartItems, 'cartItems')
    }
  }

  getSubjectItems(): IProduct[] {
    return this.itemsSubject.getValue()
  }

  getQuantityCartItems(): Observable<number> {
    return  this.quantityNumberSubject.asObservable()
  }
}
