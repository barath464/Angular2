import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {

  constructor(private rout: Router) {
  }

  data = {username: '', password: ''};

  onsubmit() {
    if (this.data.username == 'admin' && this.data.password == 'system') {
      console.log("welcome");
      console.log(this.data);
      this.rout.navigate(['admin']);
    }
    else {
      console.log('wrong username password');
      alert("please login with correct credentials");
      this.rout.navigate(['']);
    }
  }
}
