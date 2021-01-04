import { Component, OnInit } from '@angular/core';
import { PetshopsService } from './shared/petshops.service';
import { LoginService} from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedInUser: string;
  title = 'FindMeAPetshop';

  constructor(private service: LoginService){
  }

  ngOnInit(): void {
    this.loggedInUser = sessionStorage.getItem('username');
  }

  logoutUser(): void{
    this.service.logoutUser();
  }

}
