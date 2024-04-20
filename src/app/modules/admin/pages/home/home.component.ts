import { Component, OnInit } from '@angular/core'
import { IProduct } from '../../../../interfaces/IProduct'
import { ProductService } from '../../../../services/product/product.service'
import { AlertService } from '../../../../services/alert/alert.service'
import { LoadingService } from '../../../../services/loading/loading.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: IProduct[] = []
  filteredProducts: IProduct[] = [];
  searchTerm: string = ''
  showModal: boolean = false
  idItemToDelete: number = 0
  constructor (private productService: ProductService,
               private alertService: AlertService,
               private loadingService: LoadingService
  ) {}

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

  onDeleteFromTable(id: number): void {
    this.idItemToDelete = id
    this.showModal = true
  }

  deleteItem() : void {
    this.showModal = false
      this.loadingService.present()
      this.productService.delete(this.idItemToDelete).subscribe({
        next: value => {
          this.products = value
          this.filteredProducts = value
          console.log(this.products)
          this.loadingService.close()
          this.alertService.success('Se ha eliminado el producto correctamente.')
        },
        error: err => {
          this.loadingService.close()
          this.alertService.error('Hubo un error al intentar eliminar el producto.')
        },
      })
  }
}
