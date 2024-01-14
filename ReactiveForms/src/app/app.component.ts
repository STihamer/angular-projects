import { Component, OnInit } from '@angular/core';
import {
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {
  noSpaceAllowed,
  passwordValidator,
} from './custom-validators/customSyncValidators';
import { emailNotAllowedValidator } from './custom-validators/customAsyncValidators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ReactiveForms';

  reactiveForm!: FormGroup;
  skillsArray!: any[];
  formStatus!: string;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl(null, [Validators.required, noSpaceAllowed]),
        lastName: new FormControl(null, [Validators.required, noSpaceAllowed]),
      }),

      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        emailNotAllowedValidator as AsyncValidatorFn
      ),
      password: new FormControl(null, passwordValidator as ValidationErrors),
      country: new FormControl('romania'),
      gender: new FormControl('male'),
      hobbies: new FormControl(null),
      skills: new FormArray([new FormControl(null, Validators.required)]),
    });
    this.skillsArray = (<FormArray>this.reactiveForm.get('skills'))![
      'controls'
    ];

    this.reactiveForm.get('password')?.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.reactiveForm.statusChanges.subscribe((value) => {
      this.formStatus = value;
    });

    setTimeout(() => {
      this.reactiveForm.setValue({
        fullName: {
          firstName: '',
          lastName: '',
        },
        email: 'test@test.com',
        gender: '',
        password: '',
        country: '',
        hobbies: '',
        skills: [''],
      });
    }, 3000);
    setTimeout(() => {
      this.reactiveForm.patchValue({
        email: 'test2@test2.com',
      });
    }, 11000);
  }

  onSubmit() {
    // console.log(this.reactiveForm);
    this.reactiveForm.reset({
      gender: 'female',
      country: 'usa',
    });
    this.formStatus = '';
  }

  addSkills() {
    (this.reactiveForm.get('skills')! as FormArray).push(
      new FormControl(null, Validators.required)
    );
  }
}
