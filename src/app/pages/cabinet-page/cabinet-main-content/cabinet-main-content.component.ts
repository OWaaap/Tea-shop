import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faEdit,
  faList,
  faLongArrowAltLeft,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';
import { UserInfo } from 'src/app/models/user-info';
import { AuthService } from 'src/app/service/auth.service';
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

  userInfo: UserInfo;
  loginedUser: User;
  isEdit: boolean = false;
  orderHistory: boolean = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  openOrderHistory() {
    this.orderHistory = true;
  }
  openUserInfo() {
    this.orderHistory = false;
  }
  logOut() {
    this.router.navigate(['/login']);
    localStorage.removeItem('user');
    this.authService.signOut();
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      const users = data.map((item) => {
        return {
          id: item.payload.doc.id,
          ...(item.payload.doc.data() as UserInfo),
        } as UserInfo;
      });

      this.userInfo = users.find(
        (user) => user.info.uid === this.loginedUser.uid
      ) as UserInfo;
      if (!this.userInfo) {
        this.isEdit = true;
      }
    });
    this.loginedUser = JSON.parse(localStorage.getItem('user') || '{}');
  }
}
