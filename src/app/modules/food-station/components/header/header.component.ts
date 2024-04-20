import { Component, OnInit } from '@angular/core'
import { BagService } from '../../services/bag.service'
import { AuthService } from '../../../../services/auth/auth.service'
import { IUserProfile } from '../../../../interfaces/IUser'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  cartItems: number = 0
  showModalRegister: boolean = false
  isLoggedIn: boolean = false
  userProfile: IUserProfile = {
    username: '',
    rol: 99,
    email: ''
  }
  constructor (private cartService: BagService,
               private authService: AuthService
  ) {}

  ngOnInit () {
    this.cartService.getQuantityCartItems().subscribe(quantity => {
      this.cartItems = quantity
    })
    this.authService.isLoggedIn().subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn
    })
    this.userProfile = this.authService.getUserProfile()
  }

}
