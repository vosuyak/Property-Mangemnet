import { Component, OnInit } from '@angular/core';
import { PropertyItemComponent } from "../property-item/property-item.component";
import { DataService } from "../../services/data.service";
@Component({
  selector: 'app-property-count',
  templateUrl: './property-count.component.html',
  styleUrls: ['./property-count.component.scss']
})
export class PropertyCountComponent implements OnInit {

  constructor(public data:DataService,) { }
  propertyCount = [];
  propertyAmount;
  ngOnInit() {
    this.data.getProperties().subscribe(properties => {
      this.propertyCount = properties
      console.log(this.propertyCount.length);
    })
  }

}
