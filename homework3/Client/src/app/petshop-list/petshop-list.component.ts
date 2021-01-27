import { AfterViewInit, Component, OnInit, Output, ViewChild } from '@angular/core';
import { Petshop } from '../shared/petshop.model';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
/*
* this component lists all the petshops we have in a table.
* For all the petshops from the databse, a paginator lets us choose the number of petshops per page.
* All of the petshops have their name, adress and rating displayed, as well as their picture.
* There is an option to sort by Name, adress or rating.
* There is a filter option which filters by all attributes.
*/
@Component({
  selector: 'app-petshop-client',
  templateUrl: './petshop-list.component.html',
  styleUrls: ['./petshop-list.component.css']
})
export class PetshopListComponent implements OnInit, AfterViewInit {
  petshopList: Petshop[];
  displayedColumns: string[] = ['Title', 'Address', 'Rating']; // the titles for the mat-table
  @ViewChild(MatPaginator) paginator: MatPaginator; // a reference to the paginator
  dataSource: MatTableDataSource<Petshop>; // data source for the material table
  dataFetched = false; // initially the data is not fetched from the route
  @ViewChild(MatSort) sort: MatSort; // a reference to the sort field

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.petshopList = this.route.snapshot.data.petshops as Petshop[]; // fetch the data from the route
    this.dataFetched = true; // now set dataFetched to true since we got the data
    this.dataSource = new MatTableDataSource(this.petshopList); // initialize the data source for the table
  }

  ngAfterViewInit(): void{
    this.dataSource.paginator = this.paginator; // after the table is initialized initializethe paginator as well
    this.dataSource.sort = this.sort; // initialize the sort field
  }

  /*
  the apply Filter function is used to search by all parameters of the petshop at once.
   */
  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
