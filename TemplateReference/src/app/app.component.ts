import { Component } from '@angular/core';
import { CustomerListComponent } from './customer-list/customer-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TemplateReference';

  logCustomer(component: CustomerListComponent) {
    console.log(component);
  }
}
