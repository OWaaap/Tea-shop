import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/models/user-info';

@Component({
  selector: 'app-cabinet-user-data',
  templateUrl: './cabinet-user-data.component.html',
  styleUrls: ['./cabinet-user-data.component.less'],
})
export class CabinetUserDataComponent implements OnInit {
  @Input() user: UserInfo;
  constructor() {}

  ngOnInit(): void {}
}
