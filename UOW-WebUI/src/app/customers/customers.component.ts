import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../models/mock-customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customers = CUSTOMERS;

}
