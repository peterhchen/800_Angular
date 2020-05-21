import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{ name }}
    </h2>
    <h2 class = "text-success"> Hello Peter by hard code class</h2>
    <h2 [class] = "successClass"> Hello Peter by class variable name</h2>
    <h2 [class.text-danger] = "hasError"> Has Error </h2>
    <h2 [ngClass] = "messageClass"> Class Message</h2>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic
    }
  `]
})
export class TestComponent implements OnInit {
  public name = 'Peter Chen';
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

  greetUser () {
    return "greetUser(): " + this.name;
  }
}
