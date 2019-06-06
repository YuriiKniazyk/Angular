import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {timer} from 'rxjs';
import {Uni} from './unicorn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 0;
  timerId;
  str = null;

  unicorns: Uni = {
    name: '',
    color: ''
  };
  arr = [];

  constructor() {
    this.timerId = setInterval(() => {
      this.title += 1;
    }, 1000);
    setTimeout(() => {
      clearInterval(this.timerId);
    }, 10000);
  }

  reset() {
    this.title = 0;
  }

  sendUnicorn() {
    this.arr.push({name: this.unicorns.name, color: this.unicorns.color});
    console.log(this.arr);
  }
}
