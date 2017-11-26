import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { PropertyItem } from "../../models/property";
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  
  property: PropertyItem = {
      id:'',
      address:'',
      city:'',
      state:'',
      zip:'',
      description:'',
      rent:'',
      lease:'',
      bedroom:'',
      bathroom:'',
      unit:''
  }
  constructor(public data:DataService) { }

  ngOnInit() {
  }

  onSubmit(){
    if( this.property.address != '' &&
        this.property.city != '' &&
        this.property.state != '' &&
        this.property.zip != '' &&
        this.property.description != '' &&
        this.property.rent != '' &&
        this.property.lease != '' &&
        this.property.bedroom != '' &&
        this.property.bathroom )
    {

        this.data.addProperty(this.property);    
    }else{
      console.log('enter all inputs');
    }
    // do for all inputs
    // this.property.address = '';
    // this.property.city = '';    
    // this.property.state = '';
    // this.property.zip = '';
    // this.property.description = '';
    // this.property.rent = '';
    // this.property.lease = '';
    // this.property.bedroom = '';
    // this.property.bathroom = '';
    // this.property.unit = '';
    
  }
}
