import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css'],
})
export class StructureComponent implements OnInit {
  pageTitle: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {
    this.pageTitle = this.getChild(this.activatedRoute).data.value.title
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((changeEvent) => {
        console.log(changeEvent);
        this.getChild(this.activatedRoute).data.subscribe((data: any) => {
          this.pageTitle = data['title'];
          this.titleService.setTitle('DashApp' + '-' + this.pageTitle);
        });
      });
    //console.log(this.activatedRoute);
  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
