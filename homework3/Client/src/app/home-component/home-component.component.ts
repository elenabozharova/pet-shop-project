import { Component, OnInit } from '@angular/core';
/**
 * This component is the home page in the application.
 * It shows the welcome page picture and links to petshop-list component.
 */
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {
  title = 'FIND ME A PETSHOP';
  footerMsg = 'Try our app and find out the existing Petshops in Skopje with a rating higher than two.';
  constructor() {
   }

  ngOnInit(): void {
  }

}
