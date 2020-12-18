import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedInUser: string;
  title = 'Client';

  ngOnInit(): void {
    this.loggedInUser = sessionStorage.getItem('user');
  }

  logoutUser(): void{
    sessionStorage.removeItem('user');
    window.location.href = 'home';
  }

}
