import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDirectiveComponent } from './my-directive/my-directive.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { ChangeColorDirective } from './ChangeColorDirective';
import { HighLightDirective } from './HighLightDirective';


@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveComponent,
    BindingComponent,
    ChangeColorDirective,
    HighLightDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
