import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { routes } from "./app.route";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { PreviewboardComponent } from './dashboard/previewboard/previewboard.component';
import { PropertycountComponent } from './dashboard/propertycount/propertycount.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { PropertyCountComponent } from './property-count/property-count.component';
import { TenantCountComponent } from './tenant-count/tenant-count.component';
import { FinanceCountComponent } from './finance-count/finance-count.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    PreviewboardComponent,
    PropertycountComponent,
    HomeNavComponent,
    PropertyCountComponent,
    TenantCountComponent,
    FinanceCountComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
