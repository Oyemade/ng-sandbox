import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
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
    path: '**',
    redirectTo: 'dynamicTable',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
