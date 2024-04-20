import { Component, OnInit } from '@angular/core'
import { IProduct } from '../../../../interfaces/IProduct'
import { ProductService } from '../../../../services/product/product.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoadingService } from '../../../../services/loading/loading.service'
import { AlertService } from '../../../../services/alert/alert.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: IProduct = {
    title: '',
    image: 'https://loremflickr.com/640/480/food',
    price: 0,
    category: '',
    description: '',
    quantity: 0,
  }
  productForm: FormGroup = new FormGroup({});
  idProduct: string | null = null
  isEditing: boolean = false

  constructor (private productService: ProductService,
               private fb: FormBuilder,
               private loadingService: LoadingService,
               private alertService: AlertService,
               private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.idProduct = this.route.snapshot.paramMap.get('id')


    this.productForm = this.fb.group({
      title: ['', Validators.required],
      image: ['https://loremflickr.com/640/480/food', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      description: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
    });

    if (this.idProduct) {
      this.isEditing = true
      this.loadingService.present()
      this.productService.getByIdd(Number(this.idProduct)).subscribe({
        next: value => {
          this.productForm.patchValue(value)
        },
        error: err => {
          this.alertService.error('Hubo un error al intentar obtener los datos del producto.')
        },
        complete: () => {
          this.loadingService.close()
        }
      })
    }
  }

  validCreateOrEdit(): void {
    console.log(this.productForm.value)
    if (this.productForm.valid) {
      this.loadingService.present()
      if (!this.isEditing) {
        this.createProduct()
      } else {
        this.editProduct()
      }
    } else {
      this.productForm.markAllAsTouched()
    }
  }

  editProduct(): void {
    this.productService.update(Number(this.idProduct), this.productForm.value).subscribe({
      next: value => {
        this.alertService.success('Se ha actualizado el producto correctamente.')
        this.productForm.reset()
      },
      error: err => {
        this.alertService.error('Hubo un problema al intentar actualizar el producto.')
      },
      complete: () => {
        this.loadingService.close()
      }
    })
  }
  createProduct(): void {
    this.productService.create(this.productForm.value).subscribe({
      next: value => {
        this.alertService.success('Se ha agregado el producto correctamente.')
        this.productForm.reset()
      },
      error: err => {
        this.alertService.error('Hubo un problema al intentar agregar el producto')
      },
      complete: () => {
        this.loadingService.close()
      }
    })
  }
}
