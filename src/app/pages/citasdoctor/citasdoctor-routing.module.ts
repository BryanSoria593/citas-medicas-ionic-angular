import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitasdoctorPage } from './citasdoctor.page';

const routes: Routes = [
  {
    path: '',
    component: CitasdoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasdoctorPageRoutingModule {}
