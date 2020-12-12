import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Petshop } from './../shared/petshop.model';
import { PetshopsService } from './../shared/petshops.service';

@Component({
  selector: 'app-petshop',
  templateUrl: './petshop.component.html',
  styleUrls: ['./petshop.component.css']
})
export class PetshopComponent implements OnInit {

  petshop: Petshop;
  petshopId: number;
  keyword = 'id';
  constructor(private petshopsService: PetshopsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
     params => {
          // tslint:disable-next-line: no-string-literal
          this.petshopId = +params.id;
      }
    );
    this.petshopsService.getPetshop(this.petshopId).then(data => this.petshop = data);
    console.log(this.petshop);
  }

}
