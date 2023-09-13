import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const _authService = inject(AuthService);
  const _router = inject(Router);
  if(_authService.loggedIn()){
    return true;
  }
  else{
    _router.navigate(['/login']);
    return false;
  }
};
