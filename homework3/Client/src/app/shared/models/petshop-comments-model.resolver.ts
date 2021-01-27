import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { PetshopsService } from './../services/petshop/petshops.service';
/*
 * this resolver is used to fetch the comments from the api.
 * The details view is not rendered until all comments are fetched
 * it is necessarry to load all data so we show the page all at once and not in parts
 */
@Injectable()
export class PetshopCommentsResolver implements Resolve<any> {

  constructor(private service: PetshopsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return this.service.getComments();
  }
}
