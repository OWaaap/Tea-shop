import { Component, OnInit } from '@angular/core';
import {
  faEdit,
  faList,
  faLongArrowAltLeft,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';
import { UserInfo } from 'src/app/models/user-info';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cabinet-main-content',
  templateUrl: './cabinet-main-content.component.html',
  styleUrls: ['./cabinet-main-content.component.less'],
})
export class CabinetMainContentComponent implements OnInit {
  userIcon = faUserCircle;
  toHomeIcon = faLongArrowAltLeft;
  historyIcon = faList;
  editIcon = faEdit;

  userInfo: UserInfo;
  users: UserInfo[];
  user: User;
  isEdit: boolean = false;

  constructor(private userService: UserService) {}
  editUserInfo() {
    this.isEdit = true;
  }
  ngOnInit(): void {
    // this.userService.getUsers().subscribe((data) => {
    //   this.users = data.map((item) => {
    //     console.log(item);

    //     return {
    //       id: item.payload.doc.id,
    //       ...(item.payload.doc.data() as UserInfo),
    //     } as UserInfo;
    //   });
    // });

    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!localStorage.getItem('userInfo')) {
      this.isEdit = true;
    } else this.userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  }
}
