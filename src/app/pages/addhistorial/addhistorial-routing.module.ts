import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddhistorialPage } from './addhistorial.page';

const routes: Routes = [
  {
    path: '',
    component: AddhistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddhistorialPageRoutingModule {}
