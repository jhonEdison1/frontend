import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorralService } from '../../services/corral.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-animal',
  templateUrl: './agregar-animal.component.html',
  styleUrls: ['./agregar-animal.component.css']
})
export class AgregarAnimalComponent implements OnInit {

  constructor(
    private corralService: CorralService,
    private router: Router,
    private toastersvc: ToastrService
  
  ) { }
  animal = {
    nombre: '',
    idCorral: '',
    edad: '',
    tipo: '',
    peso: ''
  }
  corrales : any[];
  tipos : any[];

  ngOnInit(): void {
    this.corralService.getCorrales().subscribe(
      (res: any) => {
        this.corrales = res;
        //console.log(this.corrales);        
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.corralService.getTipos().subscribe(
      (res: any) => {
        this.tipos = res;
        //console.log(this.tipos);        
      },
      (err: any) => {
        console.log(err);
      }
    );

  }
  agregarAnimal(nombre:HTMLInputElement, idCorral:HTMLSelectElement, edad:HTMLInputElement, tipo:HTMLSelectElement, peso:HTMLInputElement){
    this.animal.nombre = nombre.value;
    this.animal.idCorral = idCorral.value;
    this.animal.edad = edad.value;
    this.animal.tipo = tipo.value;
    this.animal.peso = peso.value;
    
    this.corralService.addAnimal(this.animal).subscribe(
      (res: any) => {
        this.toastersvc.success(res.message, 'Exito');  
        this.router.navigate(['/corrales']);
      },
      (err: any) => {
        
        this.toastersvc.error('Error al agregar animal ' + err.error.message, 'Error');
      }
    );
  }

  


}
