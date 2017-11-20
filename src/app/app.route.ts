import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

// components to use in navigation
import { HomeComponent } from "./home/home.component";
import { PreviewboardComponent } from "./dashboard/previewboard/previewboard.component";

export const router:Routes = [
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'dashboard',
    component:PreviewboardComponent
  }
];


export const routes:ModuleWithProviders = RouterModule.forRoot(router);
