import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const role = authService.getRole();
  console.log('Guard check:', role, state.url); // Debugging

  // ✅ Allow admin anywhere inside private layout
  if (role === 'admin') {
    return true;
  }

  // ✅ Allow user anywhere inside private layout
  if (role === 'user') {
    return true;
  }

  // ❌ Otherwise redirect
  router.navigate(['/login']);
  return false;
};