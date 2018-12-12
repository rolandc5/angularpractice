import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo list'
  login = true;

  ngOnInit() {
    !localStorage.getItem("username") ? this.login = true : this.login = false;
  }

  onPress(e) {
    window.location.href='/home'
  }

  onClearLocal() {
    localStorage.clear();
    window.location.href="/";
  }
}
