import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  screen: string = 'forget';
  email: string = '';

  constructor() { }

  ngOnInit() {
  }

  change(event: string) {
    this.screen = event;
  }

  resetPassword() {
    // Implement password reset functionality here
    console.log('Resetting password for email:', this.email);
  }
}
