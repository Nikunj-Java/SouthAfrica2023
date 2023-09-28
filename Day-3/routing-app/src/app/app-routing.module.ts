import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalaryComponent } from './galary/galary.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutusComponent},
  {path:"contact",component:ContactusComponent},
  {path:"gallary",component:GalaryComponent,children:[
    {path:'',redirectTo:"child-a",pathMatch:'full'},
    {path:"child-a",component:ChildAComponent},
    {path:"child-b",component:ChildBComponent}
  ]
  
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
