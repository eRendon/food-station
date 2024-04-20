import { Component, OnInit } from '@angular/core'
import { LocalStoreService } from './services/localStore/local-store.service'
import { AuthService } from './services/auth/auth.service'
import { IUserProfile } from './interfaces/IUser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'food-station';

  constructor (private localStoreService: LocalStoreService, private authService: AuthService) {}

  ngOnInit () {
    this.initData()
  }

  initData(): void {
    const userProfile = this.localStoreService.getData<IUserProfile>('userProfile')
    if (userProfile) {
      this.authService.setIsLoggedIn(true)
      this.authService.setUserProfile(userProfile)
    }
  }
}
