import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedInUser: string;
  constructor(private service: LoginService) { }


  ngOnInit(): void {
    this.loggedInUser = sessionStorage.getItem('username');
  }

  logoutUser(): void{
    this.service.logoutUser();
  }

}
