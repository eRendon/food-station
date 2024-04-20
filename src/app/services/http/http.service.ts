import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import apiClient from '../../libs/axios/axios'
import { AxiosResponse } from 'axios'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor () { }

  get<T> (url: string): Observable<T> {
    return new Observable<T>(observer => {
      apiClient.get<T>(url).then((response: AxiosResponse<T>) => {
        observer.next(response.data)
        observer.complete()
      }).catch(error => {
        observer.error(error)
      })
    })
  }

  post<T, P> (url: string, data?: P): Observable<T> {
    console.log(url)
    return new Observable<T>(observer => {
      apiClient.post(url, data).then((response: AxiosResponse<T>) => {
        console.log(response)
        observer.next(response.data)
        observer.complete()
      }).catch(error => {
        observer.error(error)
      })
    })
  }

  delete<T> (url: string, id: number): Observable<T> {
    return new Observable<T>(observer => {
      apiClient.delete(`${url}/${id}`).then((response: AxiosResponse<T>) => {
        observer.next(response.data)
        observer.complete()
      }).catch(error => {
        observer.error(error)
      })
    })
  }

  update<T> (url: string, data: T): Observable<T> {
    return new Observable<T>(observer => {
      apiClient.put(url, data).then((response: AxiosResponse) => {
        observer.next(response.data)
        observer.complete()
      }).catch(error => {
        observer.error(error)
      })
    })
  }
}
