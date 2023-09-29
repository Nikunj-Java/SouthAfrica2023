import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { UserClass } from './UserClass';

@Injectable({
  providedIn: 'root'
})
export class MydataService {

  constructor() { }

  getUser(){
    return {"fname":"Nikunj","lname":"Soni"};
  }
}
