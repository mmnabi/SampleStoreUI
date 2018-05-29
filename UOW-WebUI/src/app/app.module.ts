import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { AppMaterialCustomModule } from './/app-material-custom.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component'


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialCustomModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
