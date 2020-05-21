import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{ name }}
    </h2>
    <h2 [style.color]="'orange'">Style Binding 1</h2>
    <h2 [style.color]="hasError ? 'red': 'green'">Conditional Style Binding 1</h2>
    <h2 [style.color]="highlightColor">Style Binding 2 </h2>
    <h2 [ngStyle]="titleStyles">Style Binding 3 </h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = 'Peter Chen';
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public highlightColor = "orange";
  public titleStyles = {
    color : "blue",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit() {
  }

  greetUser () {
    return "greetUser(): " + this.name;
  }
}
