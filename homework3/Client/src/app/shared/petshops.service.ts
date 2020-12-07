import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Petshop } from './petshop.model';

@Injectable({
  providedIn: 'root'
})
export class PetshopsService {
  // here we make Http Request for the Petshops to the WebAPI
  petshopData: Petshop[];

  constructor(private http: HttpClient) { }

  getPetshops(): any {
    return this.http.get(environment.apiURL + '/Petshop').toPromise();
  }
}
