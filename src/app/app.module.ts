import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RegisterComponent} from './register.component';
import {LoginComponent}from './login/login.component';
import {AdminComponent }from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,RegisterComponent,LoginComponent,AdminComponent,RegisterComponent],
  imports: [BrowserModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
