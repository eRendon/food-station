import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service'
import { IProduct } from '../../interfaces/IProduct'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService: HttpService) { }

  getProducts (): Observable<IProduct[]> {
    return this.httpService.get<IProduct[]>('/products')
  }

  create (product: IProduct): Observable<IProduct> {
    return this.httpService.post<IProduct, IProduct>('products', product)
  }
}
