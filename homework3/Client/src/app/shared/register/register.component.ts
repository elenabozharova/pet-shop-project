import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UsersService } from '../services/login/login.service';
/**
 * this component is used for the regster view.
 * the user simply provides a password and a username and is redirected to the login view.
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UsersService, private router: Router) { }
  user: User;
  username = '';
  password = '';
  ngOnInit(): void {
  }

  registerUser(): void{
   this.service.registerUser(this.username, this.password );
   this.router.navigate(['login']);
  }

}
