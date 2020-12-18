import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetshopsService } from '../../petshops.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  user: User;
  username = '';
  password = '';
  users: User[];
  loggedInUser: User;
  constructor(private service: PetshopsService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(): void{
   this.service.loginUser().then((res: User[]) => {
      this.users = res;
      // tslint:disable-next-line: triple-equals
      this.loggedInUser = this.users.find(x => x.Username == this.username);
      console.log('Log');
      console.log(this.loggedInUser);
      sessionStorage.setItem('user', this.loggedInUser.Username);
      console.log(sessionStorage.getItem('user'));
      this.router.navigate(['/home']);
    });
}


logoutUser(): void{
  sessionStorage.removeItem('user');
}
}
