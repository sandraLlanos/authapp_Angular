import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor( private auth: AuthService) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ){

    console.log({route});
    console.log({state});  

    if (this.auth.loggedIn) {
      console.log('paso el guard');      
      return true;
    }else{
      console.log('no paso el guard');      
      console.error('este es el error del guard');
      return false;
    }
  }
}
