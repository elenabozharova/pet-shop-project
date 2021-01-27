import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { PetshopsService } from './../services/petshop/petshops.service';
/**
 * this resolver is used to fetch the list of pesthops before rendering the petshop list table.
 * the API call is made through the petshop service
 */

@Injectable()
export class PetshopListResolver implements Resolve<any>{

constructor(private service: PetshopsService){
}

resolve(): Promise<any>{
    return this.service.getPetshops();
}

}
