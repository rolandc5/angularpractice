import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: '',
  }
  constructor(private loginService: UserdataService) { }

  ngOnInit() {
  }

  onLogin(username, password) {
    this.loginService.postLogin(username, password)
      .subscribe(data => {
        if (!data) return;
        localStorage.setItem("username", data.success.username);
        window.location.href = "/";
      });
  }
  
  onChangeForm(e) {
    this.user[e.target.name] = e.target.value;
  }
}
