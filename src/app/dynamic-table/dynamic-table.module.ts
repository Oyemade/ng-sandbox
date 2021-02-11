import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { FormatCellPipe } from './format-cell.pipe';
import { StyleCellDirective } from './style-cell.directive';
import { TablesComponent } from './tables/tables.component';
import { DynamicTableRoutingModule } from './dynamic-table-routing.module';

@NgModule({
  declarations: [
    DynamicTableComponent,
    FormatCellPipe,
    StyleCellDirective,
    TablesComponent,
  ],
  imports: [CommonModule, DynamicTableRoutingModule],
  providers: [CurrencyPipe, DatePipe],
})
export class DynamicTableModule {}
