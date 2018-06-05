import { Component, OnInit, ViewChild } from '@angular/core';
// import { CUSTOMERS } from '../models/mock-customers';

import { Customer, CustomerListViewModel } from '../models/customer';
import { CustomerService } from '../services/customer.service';

import { MatPaginator, MatSort } from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  displayedColumns = ['firstName', 'city', 'country', 'phone'];
  data: Customer[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    // this.getCustomers();

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.customerService!.getCustomersPaged(
            this.paginator.pageIndex, this.paginator.pageSize);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = +data.pagingInfo.totalItems;

          return data.customers;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }

  // customers: Customer[];

  // getCustomers(): void {
  //   this.customerService.getCustomers()
  //     .subscribe(customers => this.customers = customers);
  // }

}
