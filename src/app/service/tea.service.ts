import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class TeaService {
  constructor(private firestore: AngularFirestore) {}

  getData() {
    return this.firestore.collection('teas').snapshotChanges();
    // return this.firestore.collection('teas').valueChanges();
  }
}
