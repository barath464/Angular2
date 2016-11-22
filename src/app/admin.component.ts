import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: []
})
export class AdminComponent {
  rdata =[];

  constructor(private http : Http) { }
  /*ngOnInit() {
    this.getdata();
  }*/
  getdata() {
    this.http.get('http://localhost:8181/ResWebService/getallstudent')
      .map((res: Response) => res.json())
      .subscribe(
        data => {this.rdata = data},
        err => console.error(err),
        () => console.log(this.rdata)
      );
  }
}
