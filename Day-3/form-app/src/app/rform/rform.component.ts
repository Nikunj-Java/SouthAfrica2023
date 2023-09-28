import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent {

  registerForm:FormGroup;
  submitted:boolean=false;
  //if you are getting error goto tsconfig.json file and add below code
  //"strictPropertyInitialization": false,
  //save and check 


  //dependency injection
  constructor(private builder:FormBuilder){}

  ngOnInit(){
    this.registerForm=this.builder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
    })
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(!this.registerForm.valid)
      return;
    alert("Form Submitted Successfully");
  }
}
