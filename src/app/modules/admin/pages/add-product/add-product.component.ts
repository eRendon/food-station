import { Component, OnInit } from '@angular/core'
import { IProduct } from '../../../../interfaces/IProduct'
import { ProductService } from '../../../../services/product/product.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

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


  constructor (private productService: ProductService, private fb: FormBuilder) {}

  ngOnInit () {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      image: ['https://loremflickr.com/640/480/food', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      description: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
    });
  }

  createProduct(): void {
    console.log(this.productForm.value)
    if (this.productForm.valid) {
      this.productService.create(this.productForm.value).subscribe(product => {
        console.log(product)
      })
    } else {
      this.productForm.markAllAsTouched()
    }
  }
}
