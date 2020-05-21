import { Component, OnInit } from '@angular/core';

@Component({
  // First way (Use ID): app-test
  // selector: 'app-test',
  // Second Way (Use class): .app-test
  // Third way (Use Atttribute)
  // selector: '[app-test]',
  // selector: '[app-test]',
  selector: 'app-test',
  //templateUrl: './test.component.html',
  // You can use inline template instead pf templateUrl as follow:
  template: `
       <div>
       Using inline template
       </div>
  `,
  // styleUrls: ['./test.component.css']
  styles: [`
    div {
      color: red
    }
  `
  ]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
