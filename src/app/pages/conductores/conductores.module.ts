import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductoresPageRoutingModule } from './conductores-routing.module';

import { ConductoresPage } from './conductores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductoresPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConductoresPage]
})
export class ConductoresPageModule {}
