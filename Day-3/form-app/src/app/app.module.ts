import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TformComponent } from './tform/tform.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RformComponent } from './rform/rform.component';

@NgModule({
  declarations: [
    AppComponent,
    TformComponent,
    RformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
