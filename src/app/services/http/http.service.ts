import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // baseUrl: string = 'http://localhost:3000/api'
  baseUrl: string = 'https://food-station-api.vercel.app/api'
  constructor (private httpClient: HttpClient) {}

  get<T> (url: string): Observable<T> {
    return this.httpClient.get<T>(this.baseUrl+url)
  }

  getForApi<T> (url: string): Observable<T> {
    return this.httpClient.get<T>(url)
  }

  post<T, P> (url: string, data?: P): Observable<T> {
    return this.httpClient.post<T>(this.baseUrl+url, data)
  }

  delete<T> (url: string, id: number): Observable<T> {
    return this.httpClient.delete<T>(`${this.baseUrl}${url}/${id}`)
  }

  update<T> (url: string, data: T): Observable<T> {
    return this.httpClient.put<T>(this.baseUrl+url, data)
  }
}
