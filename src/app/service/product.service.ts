import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product';
import { ShopDataModel } from '../models/shop-data-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: AngularFirestore) {}

  getData(collectionName: string) {
    return this.firestore.collection(collectionName).snapshotChanges();
  }

  getProduct(collectionName: string, productId: string) {
    return this.firestore
      .collection(collectionName)
      .doc(productId)
      .valueChanges();
  }

  createProduct(product: Product) {
    return this.firestore.collection('teas').add(product);
  }

  updateProduct(data: any) {
    this.firestore.doc(`teas/${data.id}`).update(data);
  }

  deleteProduct(productId: string) {
    this.firestore.doc(`teas/${productId}`).delete();
  }
}
