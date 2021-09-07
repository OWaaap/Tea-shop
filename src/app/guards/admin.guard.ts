import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const adminUid = 'sOcyTz1Ez2V6dzlXaBLXcmXXM182';
    const userUid = JSON.parse(localStorage.getItem('user') || '[]').uid;
    const isAdmin = userUid === adminUid ? true : false;
    if (!isAdmin) {
      this.router.navigate(['/']);
      alert('You do not have the appropriate permissions to access this page');
    }
    return isAdmin;
  }
}
