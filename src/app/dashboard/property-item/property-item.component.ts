import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { PropertyItem } from "../../models/property";
import 'rxjs/Rx';
import { Observable, Subscriber } from "rxjs";
@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.scss']
})
export class PropertyItemComponent implements OnInit {

  properties: Observable<PropertyItem[]>;
  constructor(public data:DataService) { }

  ngOnInit() {
    this.data.getProperties().subscribe(properties => {
      this.properties = properties
    })
  }

  deleteProperty(event, property){
    this.data.deleteProperty(property);
  }
  
}
