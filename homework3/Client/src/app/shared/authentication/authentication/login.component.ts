import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetshopsService } from '../../petshops.service';
import { User } from '../../models/user.model';

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
  constructor(private service: PetshopsService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(): void{
   this.service.loginUser().then((res: User[]) => {
      this.users = res;
      // tslint:disable-next-line: triple-equals
      this.loggedInUser = this.users.find(x => x.Username == this.username);
      if (this.loggedInUser == null){
        this.notFound = true;
        this.router.navigate(['/login']);
      }
      sessionStorage.setItem('user', this.loggedInUser.Username);
      this.router.navigate(['/home']);
    });
  }

}
