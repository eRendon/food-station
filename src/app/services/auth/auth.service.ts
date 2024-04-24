import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service'
import { ILoginUser, IRegisterUser, IUserProfile } from '../../interfaces/IUser'
import { BehaviorSubject, Observable } from 'rxjs'
import { LocalStoreService } from '../localStore/local-store.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userProfile: IUserProfile = {
    token: '',
    email: '',
    rol: 0,
    username: '',
    id: 0
  }
  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  constructor(private httpService: HttpService,
              private localStoreService: LocalStoreService,
              private router: Router
  ) { }
  login (email: string, password: string): Observable<IUserProfile> {
    const data: ILoginUser = {
      email,
      password,
    }
    return this.httpService.post<IUserProfile, ILoginUser>('/users/login', data)
  }

  async logOut (): Promise<void> {
    this.isAuthenticated.next(false)
    this.localStoreService.clear()
    this.userProfile = {
      token: '',
      email: '',
      rol: 0,
      username: '',
      id: 0
    }
    await this.router.navigate(['/'])
  }

  register(user: IRegisterUser): Observable<IUserProfile> {
    return this.httpService.post<IUserProfile, IRegisterUser>('/users/register', user)
  }

  setUserProfile(userProfile: IUserProfile): void {
    this.userProfile = userProfile
  }

  getUserProfile(): IUserProfile {
    return this.userProfile
  }

  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated.asObservable()
  }

  isLoggedInStatic(): boolean {
    return this.isAuthenticated.value
  }

  setIsLoggedIn(payload: boolean): void {
    this.isAuthenticated.next(payload)
  }

  getToken(): string {
    return this.userProfile.token!
  }
}
