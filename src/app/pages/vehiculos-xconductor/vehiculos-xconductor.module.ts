import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiculosXConductorPageRoutingModule } from './vehiculos-xconductor-routing.module';

import { VehiculosXConductorPage } from './vehiculos-xconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiculosXConductorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [VehiculosXConductorPage]
})
export class VehiculosXConductorPageModule {}
