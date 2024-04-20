import { Component, OnInit } from '@angular/core'
import { IProduct } from '../../../../interfaces/IProduct'
import { ProductService } from '../../../../services/product/product.service'
import { LoadingService } from '../../../../services/loading/loading.service'
import { AlertService } from '../../../../services/alert/alert.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor (
    private productService: ProductService,
    private loadingService: LoadingService,
    private alertService: AlertService,
  ) {}
  products: IProduct[] = []
  ngOnInit () {
    this.getProducts()
  }

  getProducts(): void {
    this.loadingService.present()
    this.productService.getProducts().subscribe({
      next: products => {
        console.log('productos', products)
        this.products = products
        this.loadingService.close()
      },
       error: err => {
         this.loadingService.close()
        this.alertService.error('Tenemos un problema con nuestra plataforma, por favor intente mas tarde')
       }
    })
  }
}
