import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ReactiveForms';

  reactiveForm!: FormGroup;
  skillsArray!: any[];

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl(null, [
          Validators.required,
          this.noSpaceAllowed,
        ]),
        lastName: new FormControl(null, [
          Validators.required,
          this.noSpaceAllowed,
        ]),
      }),

      email: new FormControl(null, [Validators.required, Validators.email]),
      country: new FormControl('romania'),
      gender: new FormControl('male'),
      hobbies: new FormControl(null),
      skills: new FormArray([new FormControl(null, Validators.required)]),
    });
    this.skillsArray = (<FormArray>this.reactiveForm.get('skills'))![
      'controls'
    ];
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

  addSkills() {
    (this.reactiveForm.get('skills')! as FormArray).push(
      new FormControl(null, Validators.required)
    );
  }

  noSpaceAllowed(control: FormControl): ValidationErrors | null {
    if (control.value !== null && control.value.indexOf(' ') !== -1) {
      return { noSpaceAllowed: true };
    } else {
      return null;
    }
  }
}
