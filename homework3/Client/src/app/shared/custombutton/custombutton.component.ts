import { Component, Input, OnInit } from '@angular/core';
/**
 * this is the button used in the details view in order to control the disable property according to the application state.
 */
@Component({
  selector: 'app-custombutton',
  templateUrl: './custombutton.component.html',
  styleUrls: ['./custombutton.component.css']
})
export class CustombuttonComponent implements OnInit {

  @Input() matTooltipShown: boolean; // value fetched from the parent component to decide whether the button should be disabled
  @Input() matTooltipMsg: string; // the message shown when the button is disabled
  constructor() { }

  ngOnInit(): void {
  }

}
