import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BlogService} from "../blog.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() title = '';

  timerId: number = 0;

  ngOnChanges(): void {
    console.log('ngOnChange')
  }

  ngOnInit(): void {
    this.postService.sayNamePost(this.title);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerId);
    console.log('destroy');
  }

  constructor(private http: HttpClient, private postService: BlogService) { }

  delete(){
    this.http.delete('http://localhost:3000/posts/1', ).subscribe(x => {
      console.log(x);
    })
  }
}
