import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { VisitorspageComponent } from './visitors/visitorspage/visitorspage.component';
import { MyaccountModule } from './myaccount/myaccount.module';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    VisitorspageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyaccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
