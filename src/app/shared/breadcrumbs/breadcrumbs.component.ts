import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ],
})
export class BreadcrumbsComponent implements OnInit {

  title: string;

  constructor(private router: Router, private titlePage: Title, private meta: Meta) {

    this.getDataRoute()
    .subscribe(data => {
      this.title = data.title;
      this.titlePage.setTitle(this.title);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.title
      };

      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit(): void {
  }

  getDataRoute() {
    return this.router.events
    .pipe(
      filter(event =>
        event instanceof ActivationEnd),
      filter((event: ActivationEnd) =>
        event.snapshot.firstChild === null),
      map((event: ActivationEnd) =>
      event.snapshot.data)
    );
  }

}
