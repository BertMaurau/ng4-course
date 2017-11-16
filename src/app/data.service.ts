import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = [
    'Ford', 'Chevy', 'Audi'
  ];

  myData(){
    return 'This is my data, man!';
  }

}
