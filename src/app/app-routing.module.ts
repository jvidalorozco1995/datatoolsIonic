// app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'empresas',
    loadChildren: () => import('./pages/empresas/empresas.module').then(m => m.EmpresasPageModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'vehiculos',
    loadChildren: () => import('./pages/vehiculos/vehiculos.module').then( m => m.VehiculosPageModule)
  },
  {
    path: 'conductores',
    loadChildren: () => import('./pages/conductores/conductores.module').then( m => m.ConductoresPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/listado-vehiculos/listado-vehiculos.module').then( m => m.ListadoVehiculosPageModule)
  },
  {
    path: 'vehiculosconductor',
    loadChildren: () => import('./pages/vehiculos-xconductor/vehiculos-xconductor.module').then( m => m.VehiculosXConductorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }