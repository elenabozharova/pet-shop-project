import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commented } from '../../models/commented.model';
/**
 * The service that makes the api calls for petshop related data
 */
@Injectable({
  providedIn: 'root'
})
export class PetshopsService {
  // here we make Http Request for the Petshops to the WebAPI
  apiURL2 = 'https://localhost:44394/api';

  constructor(private http: HttpClient) { }

  getPetshops(): any {
    return this.http.get(environment.apiURL2 + '/Petshops').toPromise();
  }

  getPetshop(id: number): any{
    return this.http.get(environment.apiURL2 + '/Petshops/' + id).toPromise();
  }

  getComments(): any{
    return this.http.get(environment.apiURL + '/Commenteds').toPromise();
  }

  getCommentsForPetshop(petshopId: number, userId: number): any{
    return this.http.get(environment.apiURL + '/Commenteds/' + petshopId + '/' + userId).toPromise();
  }

  addComment(idUser: number, idPetshop: number, comment: string): any{
    const headers = new HttpHeaders()
     .set('Content-Type', 'application/json;charset=UTF-8').set('Access-Control-Allow-Origin', 'true');
    const options = { headers };
    const newComment = new Commented(idUser, idPetshop, comment);
    return this.http.post(environment.apiURL + '/Commenteds', JSON.stringify(newComment), options).toPromise();
  }
}
