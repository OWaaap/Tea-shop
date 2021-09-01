import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'TeaShop';
  withoutHeader = false;
  event$;
  routes = ['/admin', '/login', '/basket'];

  constructor(private location: Location) {
    this.event$ = location.onUrlChange((val) => {
      for (const route of this.routes) {
        if (val == route) {
          this.withoutHeader = false;
          return;
        }
        this.withoutHeader = true;
      }
    });
  }
}
