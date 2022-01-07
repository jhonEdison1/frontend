import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CorralService {

  private url = 'http://localhost:3000/api/';

  constructor(
    private http: HttpClient,
    private toastersvc:ToastrService
  ) { }

  getCorrales() {
    return this.http.get(`${this.url}corral`);
  }

  getAnimalsByCorral(id) {
    //console.log(id);
    return this.http.post(`${this.url}corral/animals`, { "idCorral": id });
    
  }
  getPromedioEdadbyCorral(id) {   
    //console.log(id); 
    return this.http.post(`${this.url}corral/promedio`, { "idCorral": id });
    
  }
  getAllanimals() {
    return this.http.get(`${this.url}corral/getAnimals`);
  }
  getRestricciones() {
    return this.http.get(`${this.url}restriccions`);
  }

  addCorral(corral) {
    //validar si la respuesta que nos da la api es satisfactoria   
    const respuesta = this.http.post(`${this.url}corral`, corral);
    //verificar el estado de la respuesta
    

    return respuesta;
    //return this.http.post(`${this.url}corral`, corral);
  }

  getTipos() {
    return this.http.get(`${this.url}tipos`);
  }
  addAnimal(animal) {
    return this.http.post(`${this.url}corral/animal`, animal);
  }


  
}
