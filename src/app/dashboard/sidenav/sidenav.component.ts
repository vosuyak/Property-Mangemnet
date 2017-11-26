import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {

  }
    changeRoute(page : string) {
      event.stopPropagation();
  
      this.router.navigate(['dashboard/'+page]);
      console.log('function working');
      
      location.reload();
    }
}
