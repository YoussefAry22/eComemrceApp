import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  // Parse.User.currentAsync().then(user => {
  //   console.log('Logged user', user);

  //   this.rootPage = user ? 'HomePage' : 'LoginPage';
  // }, err => {
  //   console.log('Error getting logged user');

  //   this.rootPage = 'LoginPage';
  // })
}
