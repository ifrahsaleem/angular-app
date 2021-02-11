import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import {SharedModule } from './shared/shared.module';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, CoreModule, CustomersModule, SharedModule, AppRoutingModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }