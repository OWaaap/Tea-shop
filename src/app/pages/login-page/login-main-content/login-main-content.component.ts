import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-login-main-content',
  templateUrl: './login-main-content.component.html',
  styleUrls: ['./login-main-content.component.less'],
})
export class LoginMainContentComponent implements OnInit {
  backBtnIcon = faTimes;
  isLogined: boolean = true;

  email: string;
  password: string;
  newUser_email: string;
  newUser_password: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  isReg() {
    this.isLogined = false;
  }
  isLog() {
    this.isLogined = true;
  }
  onSignIn() {
    this.authService.signIn(this.email, this.password);
  }

  onSignUp() {
    this.authService.signUp(this.newUser_email, this.newUser_password);
  }
}
