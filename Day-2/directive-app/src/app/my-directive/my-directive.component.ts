import { Component } from '@angular/core';

@Component({
  selector: 'app-my-directive',
  templateUrl: './my-directive.component.html',
  styleUrls: ['./my-directive.component.css']
})
export class MyDirectiveComponent {


  //01.ngFor
  products=[
    {"id":1,"name":"Nikunj Soni","email":"nikunj@gmail.com","country":"India"},
    {"id":2,"name":"Alex","email":"alex@gmail.com","country":"UK"},
    {"id":3,"name":"Jhon Doe","email":"jd@gmail.com","country":"South Africa"},
    {"id":4,"name":"Venter","email":"vr@gmail.com","country":"South Africa"},
    {"id":5,"name":"Sirie","email":"sr@gmail.com","country":"USA"},
  ]


  //02.ngIf
  flag=false;
  showMe(){
    this.flag=!this.flag;
  }

  //03.ngSwitch
  public day=new Date().getDay();
}
