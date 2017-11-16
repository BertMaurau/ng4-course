import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  /*
  template: `
    <h1>Hey guys!</h1>
    <p>How are you doing?</p>
    `,
  */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [

      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.2)'
      })),

      // <=> both directions
      // Single animation
      /*
      transition('small <=> large', animate('300ms ease-in', style({
        transform: 'translateY(40px)'
      })))
      */
      
      //Sequence based animation
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform:'translateY(-75px)', offset: 0}),
        style({opacity: 1, transform:'translateY(35px)', offset: .5}),
        style({opacity: 1, transform:'translateY(0)', offset: 1})
      ])))
    ])
  ]
})
export class AppComponent {

  constructor(private dataService: DataService) {

  }

  someProperty: string = '';

  // Run when component loads
  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();

  }

  // Basic properties
  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  }

  title = 'app';

  // For loop
  myArr = ['him', 'hers', 'yours'];

  // Conditions
  smth = 'something';
  smth2 = 'somethingelse';

  angularLogo = 'https://angular.io/assets/images/logos/angular/shield-large.svg';

  buttonStatus = true;

  //events

  myEvent(event) {
    console.log(event);
  }

  // Styling

  title2Class = 'red-title'

  title3Class = true

  titleClasses = {
    'red-title': true,
    'large-title': true
  }


  // Style Binding
  titleStyle = 'green'

  title2Style = true

  titleStyles = {
    'color': 'blue',
    'font-size': '0.4em'
  }

  // Animations
  state:string = 'small'
  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small')
  }  

}
