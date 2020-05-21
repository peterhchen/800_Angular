import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics = ['Angular', 'React', 'Vue'];
  // Bind the user Model to the enrollment form.
  // morining and subscribe = true
  userModel = new User ('Peter', 'peter.hp.chen@gmail.com', 4088587657, 
  '', 'morning', true);
}
