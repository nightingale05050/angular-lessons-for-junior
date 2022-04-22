import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToUrl(url: string){
    if(window.innerWidth < 700){
      this.router.navigate(['shop'])
    }else{
      this.router.navigate(['shop-desk'])
    }
  }
}
