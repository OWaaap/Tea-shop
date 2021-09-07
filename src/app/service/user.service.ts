import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: AngularFirestore) {}
  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }
  addUserInfo(userInfo: UserInfo) {
    this.firestore.collection('users').add(userInfo);
  }
}
