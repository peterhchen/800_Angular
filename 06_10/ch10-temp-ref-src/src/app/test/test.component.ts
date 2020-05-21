import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{ name }}
    </h2>
    <input #myInput1 type="text">
    <button (click)="logMessage1(myInput1.value)">Log1</button>
    <br>
    <input #myInput2 type="text">
    <button (click)="logMessage2(myInput2)">Log2</button>

  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = 'Peter Chen';


  constructor() { }

  ngOnInit() {
  }

  logMessage1 (value) {
      console.log ('value: ', value)
  }
  
  logMessage2 (ref) {
    console.log ('ref: ', ref.type)
 }
  greetUser () {
    return "greetUser(): " + this.name;
  }
}
