import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {

  //private _url: string ="src/assets/data/employees.json"
  private _url: string ="/assets/data/employees.json";
  //private _url: string= "https://jsonplaceholder.typicode.com/todos";
  currentURL = '';
  constructor(private http: HttpClient) {
    this.currentURL = window.location.href; 
  }
  getEmployee (): Observable<IEmployee[]> {
    console.log ('this.currentURL: ',  this.currentURL);
    console.log ('this.http.get(this._url): ',  this.http.get(this._url));
    return this.http.get<IEmployee[]>(this._url);
    // getEmployee ():
    // return [
    //   {"id": 1, "name": "Andrew", "age": 30},
    //   {"id": 2, "name": "Brandon", "age": 25},
    //   {"id": 3, "name": "Christina", "age": 26},
    //   {"id": 4, "name": "Elena", "age": 28}
    // ];
  }
}
