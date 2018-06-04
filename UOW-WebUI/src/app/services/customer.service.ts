import { Injectable } from '@angular/core';

import { Customer } from '../models/customer';
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

  getCustomers(): Observable<Customer[]> {
    // return of(CUSTOMERS);
    return this.http.get<Customer[]>(this.customersUrl, httpOptions)
    .pipe(
      tap(heroes => this.message.openSnackBar('Customers Loaded.')),
      catchError(this.message.handleError('getHeroes', []))
    );
  }
}
