import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-main-content',
  templateUrl: './login-main-content.component.html',
  styleUrls: ['./login-main-content.component.less'],
})
export class LoginMainContentComponent implements OnInit {
  backBtnIcon = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
