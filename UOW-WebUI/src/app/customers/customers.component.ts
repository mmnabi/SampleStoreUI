import { Component, OnInit } from '@angular/core';
// import { CUSTOMERS } from '../models/mock-customers';

import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.getCustomers();
  }

  customers: Customer[];

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

}
