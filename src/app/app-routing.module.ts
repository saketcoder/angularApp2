import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorspageComponent } from './visitors/visitorspage/visitorspage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DashboardComponent } from './myaccount/dashboard/dashboard.component';


const routes: Routes = [
{path:'' ,redirectTo: 'mainpage' ,pathMatch:"full"},
{path:'mycourse' ,component: VisitorspageComponent},
{path:'mainpage' ,component: MainpageComponent},


{path:'myaccount' , loadChildren:'./myaccount/myaccount.module#MyaccountModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
