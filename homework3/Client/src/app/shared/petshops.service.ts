import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/user.model';
import { Petshop } from './petshop.model';
import { Commented } from './models/commented.model';

@Injectable({
  providedIn: 'root'
})
export class PetshopsService {
  // here we make Http Request for the Petshops to the WebAPI

  constructor(private http: HttpClient) { }

  getPetshops(): any {
    return this.http.get(environment.apiURL + '/Petshop').toPromise();
  }

  getPetshop(id: number): any{
    return this.http.get(environment.apiURL + '/Petshop/' + id).toPromise();
  }

  registerUser(username: string, password: string): any {
    const headers = new HttpHeaders()
     .set('Content-Type', 'application/json;charset=UTF-8');
    const options = { headers };
    const user = new User(username, password);
    return this.http.post(environment.apiURL + '/Users', JSON.stringify(user), options).toPromise();
  }

  getComments(): any{
    return this.http.get(environment.apiURL + '/Commenteds').toPromise();
  }

  getCommentsForPetshop(petshopId: number, userId: number): any{
    return this.http.get(environment.apiURL + '/Commenteds/' + petshopId + '/' + userId).toPromise();
  }

  getAllUsers(): any{
    return this.http.get(environment.apiURL + '/Users').toPromise();
  }

  loginUser(): any{
    return this.http.get(environment.apiURL + '/Users').toPromise();
  }

  getUser(id: number): Observable<any> {
    return this.http.get(environment.apiURL + '/Users/' + id);
  }

  addComment(idUser: number, idPetshop: number, comment: string): any{
    const headers = new HttpHeaders()
     .set('Content-Type', 'application/json;charset=UTF-8').set('Access-Control-Allow-Origin', 'true');
    const options = { headers };
    const newComment = new Commented(idUser, idPetshop, comment);
    return this.http.post(environment.apiURL + '/Commenteds', JSON.stringify(newComment), options).toPromise();
  }
}
