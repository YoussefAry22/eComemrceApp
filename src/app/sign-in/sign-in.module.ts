import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { SignInPage } from './sign-in.page';
import { SignInPageRoutingModule } from './sign-in-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/authService';

@NgModule({
  imports: [
    HttpClientModule ,
    CommonModule,
    IonicModule,
    ReactiveFormsModule, // Include ReactiveFormsModule here
    SignInPageRoutingModule
  ],
  providers: [
    AuthService // Include AuthService here if it's provided at the module level
  ],
  declarations: [SignInPage]
})
export class SignInPageModule {}
