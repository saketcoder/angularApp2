import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MyaccountRoutingModule } from './myaccount-routing.module';



@NgModule({
  declarations: [DashboardComponent, ProfileComponent, OrdersComponent, DownloadsComponent, NotificationsComponent],
  imports: [
    CommonModule,
    MyaccountRoutingModule
  ]
})
export class MyaccountModule { }
