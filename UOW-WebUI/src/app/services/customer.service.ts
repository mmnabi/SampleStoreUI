import { Injectable } from '@angular/core';

import { Customer } from '../models/customer';
import { CUSTOMERS } from '../models/mock-customers';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { MatSnackBar } from '@angular/material';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  private customersUrl = 'http://localhost/UOW/api/customers/';

  getCustomers(): Observable<Customer[]> {
    // return of(CUSTOMERS);
    return this.http.get<Customer[]>(this.customersUrl, httpOptions)
    .pipe(
      tap(heroes => this.openSnackBar('Customers Loaded.')),
      catchError(this.handleError('getHeroes', []))
    );
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, "Ok", {
      duration: 2000,
    });
  };

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.openSnackBar(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
