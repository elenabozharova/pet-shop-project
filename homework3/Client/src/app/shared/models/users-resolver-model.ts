import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { UsersService } from '../services/login/login.service';
/**
 * this resolver is used to get all users from the api and then render the petshop detail page
 * this is needed to see if a user has already left a review on a petshop
 */
@Injectable()
export class UsersResolver implements Resolve<any> {

  constructor(private service: UsersService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return this.service.getAllUsers();
  }
}
