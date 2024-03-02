import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authService';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password)
      .then(() => {
        this.router.navigateByUrl('/');
      })
      .catch(error => {
        // Handle authentication error, show error message to user
        console.error("Authentication failed:", error);
      });
  }
  
  ngOnInit() {
  }

}