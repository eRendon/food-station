import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service'
import { AlertService } from '../../services/alert/alert.service'
import { LoadingService } from '../../services/loading/loading.service'
import { Router } from '@angular/router'
import { LocalStoreService } from '../../services/localStore/local-store.service'
import { IUserProfile } from '../../interfaces/IUser'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showModal: boolean = false
  loginForm: FormGroup = new FormGroup({})
  constructor (private fb: FormBuilder,
               private authService: AuthService,
               private alertService: AlertService,
               private loadingService: LoadingService,
               private router: Router,
               private localStoreService: LocalStoreService
  ) {}

  ngOnInit (): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  login(): void {
    console.log(this.loginForm)
    if (this.loginForm.valid) {
      this.loadingService.present()
      this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).subscribe({
        next: async value => {
          console.log(value)
          this.authService.setUserProfile(value)
          this.localStoreService.setData<IUserProfile>(value, 'userProfile')
          this.authService.setIsLoggedIn(true)
          this.loadingService.close()
          await this.router.navigate(['/'])
        },
        error: err => {
          console.log(err)
          this.loadingService.close()
          this.alertService.error('Correo o contraseña incorrecta')
        }
      })
    } else {
      this.loginForm.markAllAsTouched()
    }
  }
}
