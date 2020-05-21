import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
     <div [ngSwitch] = "color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>Pick again</div>
     </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = 'Peter Chen';
  public color = 'black';

  constructor() { }

  ngOnInit() {
  }
}