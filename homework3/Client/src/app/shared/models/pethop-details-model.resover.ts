
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { PetshopsService } from '../services/petshop/petshops.service';
/**
 * this resolver is used to fetch the particular petshop for the details view
 * the page is not rendered until the moment the resolver fetches the data from the api.
 */
@Injectable()
export class ModelResolver implements Resolve<any> {
  petshopId: number;

  constructor(private service: PetshopsService){}

  resolve(route: ActivatedRouteSnapshot): Promise<any> {
    return this.service.getPetshop(route.params.id);
  }

}
