import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
/**
 * this service is used to get data for users from the api.
 */
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private router: Router, private http: HttpClient) { }
  // clear the session storage after the user disconnects
  logoutUser(): void{
    sessionStorage.clear();
    this.router.navigate(['/login']).then(() => {
        window.location.reload();
    });
  }
  // sends a post request to create a new user on registration
  registerUser(username: string, password: string): any {
    const headers = new HttpHeaders()
     .set('Content-Type', 'application/json;charset=UTF-8');
    const options = { headers };
    const user = new User(username, password);
    return this.http.post(environment.apiURL + '/Users', JSON.stringify(user), options).toPromise();
  }
  // returns a list of all the users
  getAllUsers(): any{
    return this.http.get(environment.apiURL + '/Users').toPromise();
  }
  // returns the user with that id
  getUser(id: number): Observable<any> {
    return this.http.get(environment.apiURL + '/Users/' + id);
  }

}
