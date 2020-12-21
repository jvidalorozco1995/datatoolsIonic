import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculosXConductorPage } from './vehiculos-xconductor.page';

const routes: Routes = [
  {
    path: '',
    component: VehiculosXConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculosXConductorPageRoutingModule {}
