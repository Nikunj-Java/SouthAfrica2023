 
import { Component } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  name:string="My Name is Nikunj and I  am JAVA FSD Trainer";
  pi:number=3.1415927;
  a:number=0.12345;
  b:number=9876.5432;

  today=new Date();
  object={name:"Nikunj Soni",email:"nikunj@gmail.com",country:"India"};

  cust:string="Welcome to the world of Custom Pipes";

  utc: DateTime =DateTime.utc();
}
