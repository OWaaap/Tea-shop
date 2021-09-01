import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teas-item',
  templateUrl: './teas-item.component.html',
  styleUrls: ['./teas-item.component.less'],
})
export class TeasItemComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute) {
    const id = +activateRoute.snapshot.params['id'];
    console.log(id);
  }

  ngOnInit(): void {}
}
