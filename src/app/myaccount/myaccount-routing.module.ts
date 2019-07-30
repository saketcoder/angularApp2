import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DownloadsComponent } from './downloads/downloads.component';


const routes: Routes = [

  {path:'' , component:DashboardComponent,

children:[
{path:'profile' , component:ProfileComponent},
{path: 'orders', component:OrdersComponent},
{path:'notifications' ,component:NotificationsComponent},
{path:'downloads', component:DownloadsComponent}
]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyaccountRoutingModule { }
