import { Component, OnInit } from '@angular/core';
import { Petshop } from '../shared/petshop.model';
import { PetshopsService } from './../shared/petshops.service';

@Component({
  selector: 'app-petshop-client',
  templateUrl: './petshop-client.component.html',
  styleUrls: ['./petshop-client.component.css']
})
export class PetshopClientComponent implements OnInit {

  petshopList: Petshop[];

  constructor(private service: PetshopsService) {
  }

  ngOnInit(): void {
    this.service.getPetshops().then(
      res => {
        this.petshopList = res as Petshop[];
    }
    );
  }

}
