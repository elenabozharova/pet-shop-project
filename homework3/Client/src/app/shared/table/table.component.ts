
import { AfterViewInit, Component, OnInit, Output, ViewChild } from '@angular/core';
import { Petshop } from '../../shared/petshop.model';
import { ActivatedRoute } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  petshopList: Petshop[];
  displayedColumns: string[] = ['Title', 'Address', 'Rating'];
  dataFetched = false;
  dataSource: MatTableDataSource<Petshop>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute) { }

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
