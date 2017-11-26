import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { PropertyItem } from "../../models/property";

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit() {

  }

}
