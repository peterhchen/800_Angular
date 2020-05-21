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
  topicHasError = true;
  userModel = new User ('', 'peter.hp.chen@gmail.com', 4088587657, 
  'default', 'morning', true);
  validateTopic (value) {
    if (value == 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    } 
  }
}
