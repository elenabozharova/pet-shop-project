import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logoutUser(): void{
    sessionStorage.clear();
    window.location.reload();
  }

}
