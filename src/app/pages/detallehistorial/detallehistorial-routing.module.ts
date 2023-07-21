import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallehistorialPage } from './detallehistorial.page';

const routes: Routes = [
  {
    path: '',
    component: DetallehistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallehistorialPageRoutingModule {}
