import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticTableComponent } from './static-table/static-table.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
  },
  {
    path: 'static',
    component: StaticTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicTableRoutingModule {}
