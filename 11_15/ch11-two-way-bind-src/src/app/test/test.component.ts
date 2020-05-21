import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{ name }}
    </h2>
    <input [(ngModel)]="name1" type = "text">
    {{ name1 }}


  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = 'Peter Chen';
  public name1 = "";


  constructor() { }

  ngOnInit() {
  }


  greetUser () {
    return "greetUser(): " + this.name;
  }
}
