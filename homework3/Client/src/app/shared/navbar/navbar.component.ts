import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/login/login.service';
/**
 * the navbar component is used as a shared component for the home,
 * all pethsops and detail views, and login/register views.
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  data: any;
  @Input() loggedInUser: string;
  username: Observable<string>;
  constructor(private service: UsersService, private router: Router) {

  }

  ngOnInit(): void {
    this.loggedInUser = sessionStorage.getItem('username'); // on initialzation get the user from the session
  }

  logoutUser(): void{
    this.service.logoutUser(); // use the service to logout user
  }

}
