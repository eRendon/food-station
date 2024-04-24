import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth/auth.service'
import { inject } from '@angular/core'

export function adminGuard(): CanActivateFn {
  return () => {
    const authService: AuthService = inject(AuthService)
    console.log(authService.getUserProfile())
    const user = authService.getUserProfile()
    return ((user.rol === 2) && authService.isLoggedInStatic())
  }
}
