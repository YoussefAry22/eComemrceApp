// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): Promise<void> {
    // Here you would typically call your backend API to authenticate the user
    // For demonstration purposes, let's assume authentication is successful

    // You can use a real authentication service or mock it with a delay using setTimeout
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Mock authentication success
        resolve();
      }, 1000); // Simulating a delay of 1 second
    });
  }

  // Add other authentication-related methods here like logout, signup, etc.
}
