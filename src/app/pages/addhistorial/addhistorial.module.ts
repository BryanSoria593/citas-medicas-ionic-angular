import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddhistorialPageRoutingModule } from './addhistorial-routing.module';

import { AddhistorialPage } from './addhistorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddhistorialPageRoutingModule
  ],
  declarations: [AddhistorialPage]
})
export class AddhistorialPageModule {}
