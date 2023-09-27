import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  name:string="Nikunj Soni";

  showAlert(){
    alert("Welcome.....!!! "+this.name);
  }

}
