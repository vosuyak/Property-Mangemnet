import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Routes } from '@angular/router';
import { routes } from "./app.route";
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from 'angularfire2/auth';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { PreviewboardComponent } from './dashboard/previewboard/previewboard.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { PropertyCountComponent } from './dashboard/property-count/property-count.component';
import { TenantCountComponent } from './dashboard/tenant-count/tenant-count.component';
import { FinanceCountComponent } from './dashboard/finance-count/finance-count.component';
import { FinanceComponent } from './dashboard/finance/finance.component';
import { BoardSnippetsComponent } from './dashboard/board-snippets/board-snippets.component';
import { TenantsComponent } from './dashboard/tenants/tenants.component';
import { PropertiesComponent } from './dashboard/properties/properties.component';
import { PropertyItemComponent } from './dashboard/property-item/property-item.component';
import { AddPropertyComponent } from './dashboard/add-property/add-property.component';
import { PropertyCardComponent } from './dashboard/property-card/property-card.component';


import { DataService } from "./services/data.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    PreviewboardComponent,
    HomeNavComponent,
    PropertyCountComponent,
    TenantCountComponent,
    FinanceCountComponent,
    FinanceComponent,
    BoardSnippetsComponent,
    TenantsComponent,
    PropertiesComponent,
    PropertyItemComponent,
    AddPropertyComponent,
    PropertyCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes,
    AngularFireModule.initializeApp(environment.firebase, 'property-management'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
