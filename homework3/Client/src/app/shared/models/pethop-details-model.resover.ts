
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { Petshop } from '../petshop.model';
import { PetshopsService } from '../petshops.service';
import { HttpClientModule } from '@angular/common/http';



@Injectable()
export class ModelResolver implements Resolve<any> {
  petshopId: number;

  constructor(private service: PetshopsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    console.log('Resolving data');
    return this.service.getPetshop(route.params.id);
  }

}
