import { Injectable } from '@angular/core';

import { Customer, CustomerListViewModel } from '../models/customer';
import { CUSTOMERS } from '../models/mock-customers';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../services/message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient,
    private message: MessageService
  ) { }

  private customersUrl = 'http://localhost/UOW/api/customers/';
  private endUrl: string;

  getCustomers(): Observable<Customer[]> {
    // return of(CUSTOMERS);
    return this.http.get<Customer[]>(this.customersUrl, httpOptions)
    .pipe(
      tap(heroes => this.message.openSnackBar('Customers Loaded.')),
      catchError(this.message.handleError('getHeroes', []))
    );
  }

  getCustomersPaged(page: number, size: number): Observable<CustomerListViewModel> {
    page++;
    this.endUrl = 'page' + page + "/size" + size;
    return this.http.get<CustomerListViewModel>(this.customersUrl+this.endUrl, httpOptions)
    .pipe(
      tap(heroes => this.message.openSnackBar('Customers Loaded.')),
      catchError(this.message.handleError<CustomerListViewModel>('getHeroes'))
    );
  }
}
