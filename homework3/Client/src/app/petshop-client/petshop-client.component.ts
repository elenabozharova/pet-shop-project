import { AfterViewInit, Component, OnInit, Output, ViewChild } from '@angular/core';
import { Petshop } from '../shared/petshop.model';
import { PetshopsService } from './../shared/petshops.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-petshop-client',
  templateUrl: './petshop-client.component.html',
  styleUrls: ['./petshop-client.component.css']
})
export class PetshopClientComponent implements OnInit {
  // this component lists all the petshops we have
  petshopList: Petshop[];
  petShopsFiltered: Petshop[];
  petshopsSorted: Petshop[];
  @Output() selectedPetshopId;
  filterFlag = false;
  displayedColumns: string[] = ['Title', 'Address', 'Rating'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Petshop>;

  constructor(private service: PetshopsService) {
  }

  ngOnInit(): void {
    this.service.getPetshops().then(
     res => {
        this.petshopList = res as Petshop[];
        this.dataSource = new MatTableDataSource(this.petshopList);
        this.dataSource.paginator = this.paginator;
    }
    );
  }

  petshopSelected(id: number): any {
    this.selectedPetshopId.emit(id);
  }

  onButtonClicked(word: string): void {
    this.filterFlag = true;
    this.petShopsFiltered = this.petshopList.filter(x => x.Title.toString().includes(word));
    console.log(this.petShopsFiltered);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
