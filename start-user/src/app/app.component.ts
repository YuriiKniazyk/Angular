import { Component } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'start-user';
  isLogin = false;
  
  users = [
    {
    name: 'Yurii',
    email: 'yurii.kniazyk@gmail.com'
  },
  {
    name: 'Sasha',
    email: 'y.kniazyk@gmail.com'
  }];
  
  changeButton(){
    this.isLogin = !this.isLogin;
  }

  loglogin(){
    if(this.isLogin)
      console.log('Login');
  }
}
