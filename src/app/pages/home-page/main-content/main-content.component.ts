import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.less'],
})
export class MainContentComponent implements OnInit {
  isShow: boolean = false;

  constructor() {}

  @HostListener('document:scroll')
  scroll() {
    const value = document.documentElement.scrollTop;
    if (value > 90) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  ngOnInit(): void {}
}
