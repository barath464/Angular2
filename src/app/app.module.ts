import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin.component';
import {MyRoute} from "./app.routing";
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
