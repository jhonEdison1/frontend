import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorralService } from '../../services/corral.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-agregar-corral',
  templateUrl: './agregar-corral.component.html',
  styleUrls: ['./agregar-corral.component.css']
})
export class AgregarCorralComponent implements OnInit {

  corral = {
    nombre: '',
    capacidad: '',
    restricciones: '',
  }
  restricciones : any[];
    

  
 

  constructor(
    private corralService: CorralService,
    private router: Router,
    private toastersvc: ToastrService
  
  
  ) { }

  ngOnInit(): void {
    this.corralService.getRestricciones().subscribe(
      (res: any) => {
        this.restricciones = res;
        //console.log(this.restricciones);
       
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  agregarCorral(nombre: HTMLInputElement, capacidad: HTMLInputElement,  res: HTMLSelectElement) {
    this.corral.nombre = nombre.value;
    this.corral.capacidad = capacidad.value;
    this.corral.restricciones = res.value;
   

    
    this.corralService.addCorral(this.corral).subscribe(
      (res: any) => {
        //console.log(res);
        this.toastersvc.success(res.message, 'Exito');       
        this.router.navigate(['/corrales']);
      },
      (err: any) => { 
        this.toastersvc.error('Error al agregar corral ' + err.error.message, 'Error');
      }
    );
    
  }

}
