import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service'
import { AlertService } from '../../services/alert/alert.service'
import { LoadingService } from '../../services/loading/loading.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() onRegister: EventEmitter<null> = new EventEmitter<null>()
  userForm: FormGroup = new FormGroup({})

  constructor (private fb: FormBuilder,
               private authService: AuthService,
               private alertService: AlertService,
               private loadingService: LoadingService
  ) {}

  ngOnInit () {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      rol: [1]
    })
  }

  register(): void {
    if(this.userForm.valid) {
      this.loadingService.present()
      try {
        this.authService.register(this.userForm.value).subscribe({
          next: user => {
            this.onRegister.emit()
            this.loadingService.close()
            this.alertService.success('Se ha registrado con éxito.')
          },
          error: err => {
            this.loadingService.close()
            this.alertService.error('El correo ya está registrado' + err,)
          }
        })
      } catch (e) {
        console.log(e)
        this.loadingService.close()
        this.alertService.error('Hubo un problema al intentar registrarse:' + e,)
      }
    } else {
      this.userForm.markAllAsTouched()
    }
  }
}
