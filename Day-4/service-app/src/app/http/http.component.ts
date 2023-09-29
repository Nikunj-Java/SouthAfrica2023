import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserClass } from '../UserClass';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  users:UserClass[];

  //DI
  constructor(private service:DataService){}

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(result=>this.users=result);
  }
}
