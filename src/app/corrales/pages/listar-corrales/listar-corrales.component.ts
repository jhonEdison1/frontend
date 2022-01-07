import { Component, OnInit } from '@angular/core';
import { CorralService } from '../../services/corral.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-corrales',
  templateUrl: './listar-corrales.component.html',
  styleUrls: ['./listar-corrales.component.css']
})
export class ListarCorralesComponent implements OnInit {
 
 ;
  constructor(
    private corralService: CorralService,
    private toastersvc: ToastrService,
    private router: Router
  ) { }
    

  
  corrales: any[] = [];
  animales: any[] = [];
  reporte: any[] = [];
  ngOnInit(): void {
    this.corralService.getCorrales().subscribe(
      (res: any) => {
        this.corrales = res;
       
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  idcorral: any;
  promedio: any;
 
  onchange(id) {
    //console.log(id.value);
    this.corralService.getAnimalsByCorral(id.value).subscribe(
      (res: any) => {
               
        if (res.length > 0) {          
        this.animales = res;
        this.idcorral = id.value; 
        this.promedio = null;        
      } else {
        this.toastersvc.warning("este Corral esta vacio", 'Advertencia'); 
        this.animales = [];
       
        
      }
           
      },
      (err: any) => {
        console.log(err);
      }
    );

  }

  CalcPromedio(id){
    //console.log(id)
    this.corralService.getPromedioEdadbyCorral(id).subscribe(
      (res: any) => {
        //console.log(res);
        this.promedio = res;
      },
      (err: any) => {
        console.log(err);
      }
    );   

  }

  GenerarReporte(){
    //redirigir a una pagina de reporte
    this.router.navigate(['/corrales/Reporte']);

   

  }
  /*generarPDF(reporte){
    //generar pdf con un hola mundo y ya
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    //console.log(reporte);
    //Agrupar los Objetos del reporte para luego imprimirlos en el pdf
    //console.log(reporte)
    //agrupar los objetos del reporte por el nombe del corral
    let grupo = reporte.reduce((r, a) => {
      
      r[a.corral] = [...r[a.corral] || [], a];

      return r;
    }, Object.create(null));
    //pasr los objetos del reporte agrupados por corral a un arreglo
    let reporteGrupo = Object.values(grupo);

    console.log(reporteGrupo);
   
    
    const pdfDefinition = {
      content: [
        {
          text: 'Reporte de animales',
          bold: true,
          fontSize: 20,
          alignment: 'center',
        },
        { 
          text:'Numero Total de Animales ' + reporte.length + ' animales', 
          
        },
        { 
          table: {  
            headerRows: 1,  
            widths: ['auto', 'auto', 'auto', 'auto', 'auto'],  
            body: [  
              [{ text: 'Corral', bold: true }, 'nombre', 'Edad', 'Peso', 'Sexo'],]

        }
        }
        


      ],
    };
    
    pdfMake.createPdf(pdfDefinition).open();
   
      
    

  }*/

}
