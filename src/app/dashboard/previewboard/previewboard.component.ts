import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { PropertyItem } from "../../models/property";

@Component({
  selector: 'app-previewboard',
  templateUrl: './previewboard.component.html',
  styleUrls: ['./previewboard.component.scss']
})
export class PreviewboardComponent implements OnInit {

  properties;
  constructor(public data:DataService) { }

  ngOnInit() {
    this.data.getProperties().subscribe(properties => {
      this.properties = properties
    })
  }

}
