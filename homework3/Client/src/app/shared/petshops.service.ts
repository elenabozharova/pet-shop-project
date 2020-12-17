import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/user.model';
import { Petshop } from './petshop.model';

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

  loginUser(): any{
    return this.http.get(environment.apiURL + '/Users').toPromise();
  }

}
