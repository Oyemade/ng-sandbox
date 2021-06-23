import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DynamicModalComponent } from './dynamic-modal/dynamic-modal.component';
import { ModalsComponent } from './modals/modals.component';

const routes: Routes = [
  {
    path: '',
    component: ModalsComponent,
  },
];

@NgModule({
  declarations: [DynamicModalComponent, ModalsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DynamicModalModule {}
