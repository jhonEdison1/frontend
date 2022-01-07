import { Component, OnInit } from '@angular/core';
import { CorralService } from '../../services/corral.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  constructor(
    private corralService: CorralService,
    
  ) {
    //this.downloadPDF();
   }
  
  animals: any[] = [];
  corrales: any[] = [];
  downloadPDF() {
    // Extraemos el
    const DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3,
      pagesplit: true
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      /*
      Here are the numbers (paper width and height) that I found to work. 
      It still creates a little overlap part between the pages, but good enough for me.
      if you can find an official number from jsPDF, use them.
      */
      var imgWidth = 210; 
      var pageHeight = 295;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jsPDF('p', 'mm');
      var position = 0;

      doc.addImage(img, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(img, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      return doc.save( 'Reporte.pdf')
    });
  }
  ngOnInit(): void {
    this.corralService.getAllanimals().subscribe(
      (res: any) => {
        
        this.animals = res;
        console.log(this.animals);
        //organizar los animales por corral
        /*this.corrales = this.animals.reduce((acc, cur) => {
          const corral = acc.find(c => c.id === cur.idCorral);
          if (!corral) {
            acc.push({
              id: cur.idCorral,
              nombre: cur.corral,
              animales: [cur]
            });
          } else {
            corral.animales.push(cur);
          }
          return acc;
        }
          , []);
        console.log(this.corrales);*/
        
       
      },
      (err: any) => {
        console.log(err);
      }
    );

    
  }

}
