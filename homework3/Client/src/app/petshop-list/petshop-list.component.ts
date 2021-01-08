import { AfterViewInit, Component, OnInit, Output, ViewChild } from '@angular/core';
import { Petshop } from '../shared/petshop.model';
import { PetshopsService } from '../shared/petshops.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-petshop-client',
  templateUrl: './petshop-list.component.html',
  styleUrls: ['./petshop-list.component.css']
})
export class PetshopListComponent implements OnInit, AfterViewInit {
  // this component lists all the petshops we have
  petshopList: Petshop[];
  displayedColumns: string[] = ['Title', 'Address', 'Rating'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Petshop>;
  dataFetched = false;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.petshopList = this.route.snapshot.data.petshops as Petshop[];
    console.log(this.petshopList);
    this.dataFetched = true;
    this.dataSource = new MatTableDataSource(this.petshopList);
  }

  ngAfterViewInit(): void{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
