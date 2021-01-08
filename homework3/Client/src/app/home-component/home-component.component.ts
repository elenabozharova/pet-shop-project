import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {

  footerMsg = 'Try our app and find out the existing Petshops in Skopje with a rating higher than two.';
  constructor() { }

  ngOnInit(): void {
  }

}
