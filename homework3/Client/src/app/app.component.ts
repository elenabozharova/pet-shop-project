import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * the main component in the application
 * Inside all other components are shown by routing
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FindMeAPetshop';
  username;
  constructor(private router: Router){
  }

  ngOnInit(): void {
   this.username = sessionStorage.getItem('username');
  }

}
