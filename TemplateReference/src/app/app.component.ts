import { Component, ElementRef, ViewChild } from '@angular/core';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TemplateReference';

  @ViewChild('dobInput') dateOfBirth!: ElementRef;
  @ViewChild('ageInput') age!: ElementRef;
  logCustomer(component: CustomerListComponent) {
    console.log(component);
  }

  calculateAge() {
    let birthYear = parseInt(
      this.dateOfBirth.nativeElement.value.substring(0, 4)
    );

    // let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
  }

  @ViewChild(CustomerListComponent, { static: true })
  customerListComponent!: CustomerListComponent;

  @ViewChild(DemoComponent)
  demoComponent!: DemoComponent;

  constructor() {
    setTimeout(() => {
      console.log(this.customerListComponent.customers), 1;
      console.log(this.demoComponent), 1;
    });
  }
}
