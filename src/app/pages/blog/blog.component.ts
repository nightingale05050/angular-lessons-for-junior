import { Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BlogService} from "../../blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{

  title = "default title";
  posts: any = [];

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    })
    this.blogService.getNewPost( {title: 'Lesson is over', author: 'Alex'}).subscribe(posts => {
      console.log(posts);
      this.posts.push(posts);
    })

  }

}
