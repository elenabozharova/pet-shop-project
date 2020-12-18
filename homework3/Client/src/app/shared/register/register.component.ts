import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { PetshopsService } from '../petshops.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: PetshopsService, private router: Router) { }
  user: User;
  username = '';
  password = '';
  ngOnInit(): void {
  }
  registerUser(register: NgForm): void{
   this.service.registerUser(this.username, this.password );
   this.router.navigate(['login']);
  // sessionStorage.setItem('loggedInUser', this.user.Username);
  }

}
