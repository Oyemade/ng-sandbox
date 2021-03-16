import { NgModule } from '@angular/core';
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  PercentPipe,
} from '@angular/common';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { FormatCellPipe } from './format-cell.pipe';
import { StyleCellDirective } from './style-cell.directive';
import { TablesComponent } from './tables/tables.component';
import { DynamicTableRoutingModule } from './dynamic-table-routing.module';
import { StaticTableComponent } from './static-table/static-table.component';

@NgModule({
  declarations: [
    DynamicTableComponent,
    FormatCellPipe,
    StyleCellDirective,
    TablesComponent,
    StaticTableComponent,
  ],
  imports: [CommonModule, DynamicTableRoutingModule],
  providers: [CurrencyPipe, DatePipe, PercentPipe],
})
export class DynamicTableModule {}
