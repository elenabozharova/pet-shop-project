import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { PetshopsService } from './../petshops.service';

@Injectable()
export class UsersResolver implements Resolve<any> {

  constructor(private service: PetshopsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return this.service.getAllUsers();
  }
}
