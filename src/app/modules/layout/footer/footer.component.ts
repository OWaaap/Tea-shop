import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
})
export class FooterComponent implements OnInit {
  navBar = ['Shop', 'Teas', 'Accessories', 'Contact'];
  constructor() {}

  ngOnInit(): void {}
}
