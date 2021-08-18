import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { ShopDataModel } from '../models/shop-data-model';
@Injectable({
  providedIn: 'root',
})
export class TeaService {
  categorys: AngularFireList<ShopDataModel>;
  constructor(private db: AngularFireDatabase) {}

  getBlackTeas() {
    this.categorys = this.db.list('categories');
    return this.categorys.valueChanges();
  }
}
