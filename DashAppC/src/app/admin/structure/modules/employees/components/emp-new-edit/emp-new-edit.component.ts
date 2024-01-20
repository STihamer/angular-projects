import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { MatDialogRef } from '@angular/material/dialog';

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

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private matDialogRef: MatDialogRef<EmpNewEditComponent>
  ) {
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
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value).subscribe({
        next: (success) => {
          console.log(success);
          alert('New Employee added with success!');
          this.matDialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
          alert(err.statusText);
        },
        complete: () => {
          console.log('Observeble has completed and the listner has stopped');
        },
      });
    }
  }
}
