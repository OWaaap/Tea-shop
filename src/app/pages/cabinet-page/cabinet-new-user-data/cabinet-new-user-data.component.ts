import { Component, OnInit } from '@angular/core';
import { faEdit, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cabinet-new-user-data',
  templateUrl: './cabinet-new-user-data.component.html',
  styleUrls: ['./cabinet-new-user-data.component.less'],
})
export class CabinetNewUserDataComponent implements OnInit {
  userIcon = faUserCircle;
  editIcon = faEdit;

  user: User;

  name: string;
  surname: string;
  middleName: string;
  phoneNumber: number;
  dateBirth: string;
  sex: string;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }
  saveUserInfo() {
    const userInfo = {
      uid: this.user.uid,
      info: {
        email: this.user.email,
        name: this.name,
        surname: this.surname,
        middleName: this.middleName,
        phoneNumber: this.phoneNumber,
        dateBirth: this.dateBirth,
        sex: this.sex,
      },
    };
    // localStorage.setItem('userInfo', JSON.stringify(userInfo));
    // this.userService.addUserInfo(userInfo);
  }
}
