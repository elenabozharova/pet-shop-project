import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerMsg = 'Try our app and find out the existing Petshops in Skopje with a rating higher than two.';

  constructor() { }

  ngOnInit(): void {
  }

}
