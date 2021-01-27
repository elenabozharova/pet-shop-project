import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetshopsService } from '../../services/petshop/petshops.service';
import { User } from '../../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { UsersService } from '../../services/login/login.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  username = '';
  password = '';
  users: User[];
  loggedInUser: User;
  notFound = false;

  constructor(private service: UsersService, private router: Router) {
    console.log('Login component initialization');
   }

  ngOnInit(): void {

  }

  loginUser(): void{
   this.service.getAllUsers().then((res: User[]) => {
      this.users = res;
      /* find the list of all users and check if the username
          and password provided match any of the users in the database
      */
      /**
       * if the user was not found that means the credentials are false,
       * so set the boolean that controles the hidden property of the error message to false,
       * else the credentials exist in the database so redirect the user to the homepage
       */
      this.loggedInUser = this.users.find(x => x.Username === this.username && x.Pass === this.password);
      if (this.loggedInUser === undefined){
        this.notFound = true;
        this.router.navigate(['/login']);
      }
      else {
        this.notFound = false;
        sessionStorage.setItem('username', this.loggedInUser.Username);
        sessionStorage.setItem('currentUserId', this.loggedInUser.Id.toString());
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });
      }
    });
  }

}
