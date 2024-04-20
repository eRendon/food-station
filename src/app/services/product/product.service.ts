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

  delete (id: number): Observable<IProduct[]> {
    return this.httpService.delete<IProduct[]>('/products', id)
  }

  getByIdd(id: number): Observable<IProduct> {
    return this.httpService.get(`/products/${id}`)
  }

  update(id: number, product: IProduct): Observable<IProduct> {
    return this.httpService.update<IProduct>(`/products/${id}`, product)
  }
}
