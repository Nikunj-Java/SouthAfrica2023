import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  posts:any[]=[];

  //DI
  constructor(private postService:PostService){}

  ngOnInit(): void {
    //load on begining
    this.loadPosts();
  }

  loadPosts():void{
    this.postService.getPosts().subscribe(posts=>{this.posts=posts;});
  }

  addPost():void{
    const newPost={title:'New  Post', date:"New date"};
    this.postService.addPost(newPost).subscribe(()=>{this.loadPosts();});
  }

  updatePost(postId:number):void{
    const updatePost={title:'New Updated  Post', date:"New Updated date"};
    this.postService.updatePost(postId,updatePost).subscribe(()=>{this.loadPosts();});
  }

  deletePost(postId:number):void{
    
    this.postService.deletePost(postId).subscribe(()=>{this.loadPosts();});
  }
}
