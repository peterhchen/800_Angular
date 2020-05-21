import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{ name }}
    </h2>
    <input [id]="myId" type="text" value = "Peter">
    <input [disabled]="isDisabled" id= "{{ myId}}" type="text" value = "Peter">
    <input bind-disabled="isDisabled1" id= "{{ myId1}}" type="text" value = "Irene">
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = 'Peter Chen';
  public myId = "testId";
  public isDisabled = true;
  public isDisabled1 = true;

  constructor() { }

  ngOnInit() {
  }

  greetUser () {
    return "greetUser(): " + this.name;
  }
}
