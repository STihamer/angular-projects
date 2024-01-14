import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gender } from './models/gender.enum';
import { Registration } from './models/registration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularTemplateForms';
  defaultCountry = 'romania';
  defaultGender = 'Male';

  @ViewChild('myForm') ngForm!: NgForm;

  genders = [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' },
    { id: 3, value: 'Other' },
  ];

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.determineGender(form.value.gender);
      this.registrations.push(form.value);
      form.resetForm();
    }
  }

  showRegistrationExample() {
    /*  this.form.setValue({
      country: 'romania',
      hobbies: '',
      fullName: {
        firstName: 'Jane',
        lastName: 'Smith',
      },
      email: 'jane.smith@example.com',
      gender: 'Female',
    }); */

    this.ngForm.form.patchValue({
      fullName: {
        firstName: 'Jane',
        lastName: 'Smith',
      },
      email: 'jane.smith@example.com',
      gender: 'Female',
    });
  }

  registrations: Registration[] = [
    {
      id: '1',
      fullName: {
        firstName: 'Stefan',
        lastName: 'TheGreat',
      },
      email: 'TheGreat@example.com',
      gender: Gender.Male,
      country: 'Romania',
    },
    {
      id: '2',
      fullName: {
        firstName: 'Mihai',
        lastName: 'TheBrave',
      },
      email: 'TheBrave@example.com',
      gender: Gender.Male,
      country: 'Romania',
    },
    {
      id: '3',
      fullName: {
        firstName: 'Queen',
        lastName: 'Maria',
      },
      email: 'QueenMaria@example.com',
      gender: Gender.Female,
      country: 'Romania',
    },
  ];

  getGenderString(gender: Gender): string {
    switch (gender) {
      case Gender.Male:
        return 'Male';
      case Gender.Female:
        return 'Female';
      default:
        return 'Other';
    }
  }

  determineGender(gender: string) {
    if (gender === 'Male') {
      return (this.ngForm.value.gender = Gender.Male);
    } else if (gender === 'Female') {
      return (this.ngForm.value.gender = Gender.Female);
    } else {
      return (this.ngForm.value.gender = Gender.Other);
    }
  }
}
