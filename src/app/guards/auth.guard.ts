import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { inject } from '@angular/core'

export function adminGuard(): CanActivateFn {
  return () => {
    const authService: AuthService = inject(AuthService)
    return authService.isLoggedIn()
  }
}
