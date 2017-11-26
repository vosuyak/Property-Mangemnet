import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { PropertyItem } from "../models/property";
import { Observable } from "rxjs/Observable";


@Injectable()
export class DataService {
  propertyCollection: AngularFirestoreCollection<PropertyItem>;
  properties: Observable<PropertyItem[]>;
  itemDoc : AngularFirestoreDocument<PropertyItem>;
  constructor(public afs:AngularFirestore) {
    // this.properties = this.afs.collection('properties').valueChanges();
    this.propertyCollection = this.afs.collection('properties');
    
    this.properties = this.afs.collection('properties').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as PropertyItem;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getProperties():Observable<any>{
    return this.properties;
  }
  addProperty(property:PropertyItem){
    this.propertyCollection.add(property);
  }
  deleteProperty(property: PropertyItem){
    this.itemDoc = this.afs.doc(`properties/${property.id}`);
    this.itemDoc.delete();
  }
}

