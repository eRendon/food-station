import { Component, OnInit } from '@angular/core'
import { dropdownAnimation } from '../../../libs/animations/dropDownInOut'
import { AuthService } from '../../../services/auth/auth.service'
import { IUserProfile } from '../../../interfaces/IUser'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [dropdownAnimation]
})
export class DropdownComponent implements OnInit {
  isOpen: boolean = false
  userProfile: IUserProfile = {
    rol: 0,
    email: '',
    username: ''
  }

  isLoggedIn: boolean = false
  constructor (private authService: AuthService) {}

  ngOnInit () {
    this.userProfile = this.authService.getUserProfile()
    this.authService.isLoggedIn().subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn
    })
  }

  async logOut (): Promise<void> {
    await this.authService.logOut()
  }
}
