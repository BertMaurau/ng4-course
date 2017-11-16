import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*
  template: `
    <h1>Hey guys!</h1>
    <p>How are you doing?</p>
    `,
  */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Basic properties
  myObject = {
    gender: 'male',
    age: 33,
    location:'USA'
  }

  title = 'app';

  // For loop
  myArr = ['him','hers','yours'];

  // Conditions
  smth = 'something';
  smth2 = 'somethingelse';

  angularLogo = 'https://angular.io/assets/images/logos/angular/shield-large.svg';

  buttonStatus = true;

  //events

  myEvent(event){
    console.log(event);
  }
}
