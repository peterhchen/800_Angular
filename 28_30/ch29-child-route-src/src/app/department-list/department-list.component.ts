import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
    Department List
    </h3>
    <ul class="items">
      <li (click) = "onSelect(department)" [class.selected]="isSelected(department)" *ngFor ="let department of departments">
      <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  public departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe ((params: ParamMap) => {
      let id = parseInt (params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect (department) {
    //this.router.navigate (['/departments', department.id]);
    // We inherite the route as the relaive deifined in app-routing.modules.
    this.router.navigate ([department.id], { relativeTo: this.route })
  }

  isSelected (department) {
    return department.id === this.selectedId;
  }
}
