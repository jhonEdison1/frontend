import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCorralComponent } from './pages/agregar-corral/agregar-corral.component';
import { ListarCorralesComponent } from './pages/listar-corrales/listar-corrales.component';

import { AuthGuard } from '../auth.guard';
import { AgregarAnimalComponent } from './pages/agregar-animal/agregar-animal.component';
import { ReporteComponent } from './pages/reporte/reporte.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'AddCorral', component: AgregarCorralComponent, canActivate: [AuthGuard]},
      {path: 'listarCorrales', component: ListarCorralesComponent, canActivate: [AuthGuard]},
      {path: 'AgregarAnimales', component: AgregarAnimalComponent, canActivate: [AuthGuard]},
      {path: 'Reporte', component: ReporteComponent, canActivate: [AuthGuard]},
      {path: '**', redirectTo: 'listarCorrales'}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorralesRoutingModule { }
