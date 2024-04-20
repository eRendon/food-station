import { Component, OnInit } from '@angular/core'
import { IProduct } from '../../../../interfaces/IProduct'
import { ProductService } from '../../../../services/product/product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: IProduct[] = []
  filteredProducts: IProduct[] = [];
  searchTerm: string = ''
  constructor (private productService: ProductService) {}

  ngOnInit () {
    this.getProducts()
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products
      this.applyFilter()
    })
  }

  applyFilter(): void {
    if (this.searchTerm.trim()) {
      this.filteredProducts = this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
}
