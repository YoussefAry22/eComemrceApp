import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  screen: any = 'signin';
  formData: FormGroup;
  isLoading: boolean = false;
  constructor(private fb:FormBuilder, private auth:AuthService) {
    this.formData = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
    });
  }

  ngOnInit() {}

  change(event: any){
    this.screen = event;
  }

  login() {
    if (this.formData && this.formData.valid) { // Check if formData is not null before accessing its properties
      this.isLoading = true;
  
      const emailControl = this.formData.get('email');
      const passwordControl = this.formData.get('password');
  
      // Perform null checks on emailControl and passwordControl
      if (emailControl && passwordControl) {
        const email = emailControl.value;
        const password = passwordControl.value;
  
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
  
        console.log(formData);
  
        this.auth.userLogin(formData).subscribe(
          (data: any) => {
            console.log(data);
          },
          (error) => {
            console.error("Error occurred during login:", error);
            // Handle error, show error message to the user, etc.
          }
        );
      } else {
        console.error("Email or password control is null.");
        // Handle null controls, show error message to the user, etc.
      }
    }
  }
  


  register() {
    if (this.formData && this.formData.valid) { // Check if formData is not null and valid
      this.isLoading = true;
  
      const nameControl = this.formData.get('name');
      const emailControl = this.formData.get('email');
      const passwordControl = this.formData.get('password');
  
      // Perform null checks on nameControl, emailControl, and passwordControl
      if (nameControl && emailControl && passwordControl) {
        const name = nameControl.value;
        const email = emailControl.value;
        const password = passwordControl.value;
  
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
  
        console.log(formData);
  
        this.auth.userRegister(formData).subscribe(
          (data: any) => {
            console.log(data);
          },
          (error) => {
            console.error("Error occurred during registration:", error);
            // Handle error, show error message to the user, etc.
          }
        );
      } else {
        console.error("One or more form controls (name, email, password) are null.");
        // Handle null controls, show error message to the user, etc.
      }
    }
  }
}