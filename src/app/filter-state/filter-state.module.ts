import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterStateRoutingModule } from './filter-state-routing.module';
import { TableComponent } from './table/table.component';
import { FilterComponent } from './filter/filter.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableComponent, FilterComponent, DetailsComponent],
  imports: [CommonModule, FormsModule, FilterStateRoutingModule],
})
export class FilterStateModule {}
