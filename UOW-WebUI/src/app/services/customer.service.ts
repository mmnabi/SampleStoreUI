import { Injectable } from '@angular/core';

import { Customer } from '../models/customer';
import { CUSTOMERS } from '../models/mock-customers';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  private customersUrl = 'http://localhost/UOW/api/customers/';

  getCustomers(): Observable<Customer[]> {
    // return of(CUSTOMERS);
    return this.http.get<Customer[]>(this.customersUrl, httpOptions);
  }
}
