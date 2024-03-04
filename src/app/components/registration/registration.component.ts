import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  get interests(): FormArray {
    return this.registrationForm.get('interests') as FormArray;
  }

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z-]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z-]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,14}$/)]],
      email: ['', [Validators.required, Validators.email]],
      interests: this.fb.array([this.createInterest()]),
    });
  }

  createInterest(): FormGroup {
    return this.fb.group({
      interest: ['', Validators.required],
    });
  }

  addInterest() {
    this.interests.push(this.createInterest());
  }

  removeInterest(index: number) {
    this.interests.removeAt(index);
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      this.authService.signUp(formData).subscribe(
        (response) => {
          console.log('Registration successful', response);
        },
        (error) => {
          console.error('Registration failed', error);
        }
      );
    } else {
      console.error('Form validation failed');
    }
  }
}
