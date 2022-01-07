import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorralesRoutingModule } from './corrales-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../auth/services/token-interceptor.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarCorralComponent } from './pages/agregar-corral/agregar-corral.component';
import { ListarCorralesComponent } from './pages/listar-corrales/listar-corrales.component';

import { AuthGuard } from '../auth.guard';
import { AgregarAnimalComponent } from './pages/agregar-animal/agregar-animal.component';
import { ReporteComponent } from './pages/reporte/reporte.component';


@NgModule({
  declarations: [
    AgregarCorralComponent,
    ListarCorralesComponent,
    AgregarAnimalComponent,
    ReporteComponent
  ],
  imports: [
    CommonModule,
    CorralesRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    

    


  ],
  providers: [
    AuthGuard,{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }

  ]
})
export class CorralesModule { }
