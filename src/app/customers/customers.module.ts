import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }      from '@angular/forms';
import {SharedModule } from '../shared/shared.module';

import { CustomersComponent }  from './customers.component';
import { CustomersListComponent }  from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox/filter-textbox.component';
@NgModule({
  imports:      [ CommonModule, SharedModule, FormsModule ],
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent],
  exports: [ CustomersComponent]
})
export class CustomersModule { }