import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

// components to use in navigation
import { HomeComponent } from "./home/home.component";
import { PreviewboardComponent } from "./dashboard/previewboard/previewboard.component";
import { FinanceComponent } from "./dashboard/finance/finance.component";
import { FinanceCountComponent } from "./dashboard/finance-count/finance-count.component";
import { BoardSnippetsComponent } from "./dashboard/board-snippets/board-snippets.component";
import { TenantsComponent } from "./dashboard/tenants/tenants.component";
import { PropertiesComponent } from "./dashboard/properties/properties.component";
import { TenantCountComponent } from "./dashboard/tenant-count/tenant-count.component";
import { PropertyItemComponent } from "./dashboard/property-item/property-item.component";

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
    component:PreviewboardComponent,
    children:[
      {
        path:'',
        redirectTo:'snippets',
        pathMatch:'full'
      },
      {
        path:'finances',
        component: FinanceComponent
      },
      {
        path:'tenants',
        component: TenantsComponent
      },
      {
        path:'properties',
        component:PropertiesComponent
      },
      {
        path:'snippets',
        component:BoardSnippetsComponent
      }
    ]
  },

];


export const routes:ModuleWithProviders = RouterModule.forRoot(router);
