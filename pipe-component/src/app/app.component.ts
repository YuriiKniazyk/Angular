import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 0;
  timerId;
  str = undefined;

  unicorns = {
    name: '',
    color: ''
  }
  arr = [];

  constructor() {

  this.timerId = setInterval(() => {
      this.title += 1;
    }, 1000); 

  setTimeout(() => {
    clearInterval(this.timerId);
  }, 10000)}
  
  reset() {
    this.title = 0;
  }

  sendUnicorn() {
    console.log(this.unicorns);
    
  }
  
}
