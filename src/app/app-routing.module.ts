import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dynamicTable',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dynamicTable',
    loadChildren: () =>
      import('./dynamic-table/dynamic-table.module').then(
        (m) => m.DynamicTableModule
      ),
  },
  {
    path: 'filterState',
    loadChildren: () =>
      import('./filter-state/filter-state.module').then(
        (m) => m.FilterStateModule
      ),
  },
  {
    path: '**',
    redirectTo: 'dynamicTable',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
