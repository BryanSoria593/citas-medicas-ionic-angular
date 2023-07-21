import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitasdoctorPageRoutingModule } from './citasdoctor-routing.module';

import { CitasdoctorPage } from './citasdoctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitasdoctorPageRoutingModule
  ],
  declarations: [CitasdoctorPage]
})
export class CitasdoctorPageModule {}
