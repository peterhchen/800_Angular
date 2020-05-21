import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{ "Hello " + name }} </h2>
    <h2>{{ "Hello " +  name | lowercase }} </h2>
    <h2>{{ "Hello " +  name | uppercase }} </h2>
    <h2>{{ message | titlecase }} </h2>
    <h2>{{ "Hello " +  name | slice:3 }} </h2>
    <h2>{{ "Hello " +  name | slice:3:5 }} </h2>
    <h2>{{ person | json }} </h2>

    <h2>{{ 5.678 | number: "1.2-3" }} </h2>
    <h2>{{ 5.678 | number: "3.4-5" }} </h2>
    <h2>{{ 5.678 | number: "3.1-2" }} </h2>

    <h2>{{ 0.25 | percent }} </h2>
    <h2>{{ 0.25 | currency }} </h2>
    <h2>{{ 0.25 | currency: 'GBP' }} </h2>
    <h2>{{ 0.25 | currency: 'GBP': 'code' }} </h2>
    <h2>{{ 0.25 | currency: 'EUR' }} </h2>
    <h2>{{ 0.25 | currency: 'EUR': 'code' }} </h2>

    <h2>date => {{ date }} </h2>
    <h2>date | date => {{ date | date }} </h2>
    <h2>date | date: 'short' => {{ date | date: 'short'}} </h2>
    <h2>date | date: 'shortDate' => {{ date | date: 'shortDate'}} </h2>
    <h2>date | date: 'shortTime' => {{ date | date: 'shortTime'}} </h2>
    <h2>date | date: 'medium' =>{{ date | date: 'medium'}} </h2>
    <h2>date | date: 'mediumDate' => {{ date | date: 'mediumDate'}} </h2>
    <h2>date | date: 'mediumTime' => {{ date | date: 'mediumTime'}} </h2>
    <h2>date | date: 'long' => {{ date | date: 'long'}} </h2>
    <h2>date | date: 'longDate' => {{ date | date: 'longDate'}} </h2>
    <h2>date | date: 'longTime' => {{ date | date: 'longTime'}} </h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  
  public name = "Peter";
  public message = "Welcome to Peter";
  public person = {
    "firstName": "Jason",
    "lastName": "Chen"
  }

  public date = new Date();
  constructor() { }

  ngOnInit() {
  }
}
