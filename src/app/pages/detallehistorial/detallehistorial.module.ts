import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallehistorialPageRoutingModule } from './detallehistorial-routing.module';

import { DetallehistorialPage } from './detallehistorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallehistorialPageRoutingModule
  ],
  declarations: [DetallehistorialPage]
})
export class DetallehistorialPageModule {}
