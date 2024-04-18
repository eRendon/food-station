import { Component } from '@angular/core';
import { IProduct } from '../../../interfaces/IProduct'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: IProduct[] = [
    {
      quantity: 0,
      name: 'Producto nombre',
      price: 0,
      description: 'Producto descipcion'
    }
  ]
}
