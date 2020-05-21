import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{ name }}
    </h2>
    <button (click)="onClick($event)"> Greet 1</button>
    {{ greeting }}
    <button (click)="greeting2 ='Welcome Peter'"> Greet 2</button> {{ greeting2 }}
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = 'Peter Chen';
  public greeting = "";

  constructor() { }

  ngOnInit() {
  }

  onClick (event) {
    console.log ("Welcome to Angular");
    console.log ("Angular event: ", event);
    // this.greeting = "Welcome to Angular";
    this.greeting = event.type;
  }

  greetUser () {
    return "greetUser(): " + this.name;
  }
}
