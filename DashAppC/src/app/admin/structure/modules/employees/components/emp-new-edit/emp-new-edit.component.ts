import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-new-edit',
  templateUrl: './emp-new-edit.component.html',
  styleUrls: ['./emp-new-edit.component.css'],
})
export class EmpNewEditComponent {
  employeeForm!: FormGroup;

  education: string[] = ['High School', 'Bachelor', 'Master', 'Doctorate'];

  experience: string[] = [
    'Intern',
    'Consulting',
    'Senior Consulting',
    'Manager',
    'Senior Manager',
    'Partner',
  ];

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      experience: '',
      salary: '',
    });
  }

  onSubmit() {
    console.log(this.employeeForm);
  }
}
