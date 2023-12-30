import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent {
  selectedCustomer!: Customer | undefined;
  customers: Customer[] = [
    {
      customerNo: 1,
      name: 'Razvan Vecerdea',
      address: '',
      city: 'Sibiu',
      country: 'RO',
    },
    {
      customerNo: 2,
      name: 'Max Mustermann',
      address: '',
      city: 'Berlin',
      country: 'DE',
    },
    {
      customerNo: 3,
      name: 'John Doe',
      address: '',
      city: 'London',
      country: 'UK',
    },
    {
      customerNo: 4,
      name: 'Fritz Bergen',
      address: '',
      city: 'Satzburg',
      country: 'AT',
    },
    {
      customerNo: 5,
      name: 'Mihai the Brave',
      address: '',
      city: 'Iasi',
      country: 'RO',
    },
  ];
}
