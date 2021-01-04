import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custombutton',
  templateUrl: './custombutton.component.html',
  styleUrls: ['./custombutton.component.css']
})
export class CustombuttonComponent implements OnInit {
@Input() matTooltipShown: boolean;
@Input() matTooltipMsg: string;
  constructor() { }

  ngOnInit(): void {
  }

}
