import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  constructor() { }

  setData<T>(data:T, key: string): void {
    localStorage.setItem(key, JSON.stringify(data))
  }

  getData<T>(key: string): T | null {
    const data = localStorage.getItem(key)
    if (data) {
      return JSON.parse(data)
    }
    return null
  }

  clear(): void {
    localStorage.clear()
  }
}
