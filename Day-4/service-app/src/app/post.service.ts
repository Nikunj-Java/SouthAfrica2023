import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  //to install json server
    //npm i -g json-server
  //to start json server
    //json-server --watch db.json
  private apiUrl="http://localhost:3000/posts";

  constructor(private http:HttpClient) { }

  //01 Retrive All Records
  getPosts(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  //02 Retrive Records by id 
  getPost(id:number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  //03 Create Records
  addPost(post:any): Observable<any>{
    return this.http.post<any>(this.apiUrl,post);
  }

  //04 Update Records by id
  updatePost(id:number,post:any): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${id}`,post);
  }

  //05 Delete Records by id
  deletePost(id:number): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
