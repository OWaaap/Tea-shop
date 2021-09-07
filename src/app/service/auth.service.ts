import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  constructor(
    public firebaseAuth: AngularFireAuth,
    public firestore: AngularFirestore,
    private router: Router
  ) {}

  signIn(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error.code);
      })
      .then((res) => {
        console.log(res?.user);
        const userData = res?.user;
        localStorage.setItem('user', JSON.stringify(userData));
        const adminUid = 'sOcyTz1Ez2V6dzlXaBLXcmXXM182';

        userData?.uid === adminUid
          ? this.router.navigate(['admin'])
          : this.router.navigate(['']);

        // this.firestore.collection('users').add();
      });
  }

  signUp(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error.code);
      })
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res?.user));
      });
  }
  signOut() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}
