import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../../../services/auth/auth.service'
import { IUserProfile } from '../../../../interfaces/IUser'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  userProfile: IUserProfile = {
    rol: 0,
    email: '',
    username: ''
  }
  constructor (private authService: AuthService) {}

  ngOnInit () {
    this.getProfile()
  }

  getProfile(): void {
    this.userProfile = this.authService.getUserProfile()
  }

  logOut(): void {
    this.authService.logOut()
  }
}
