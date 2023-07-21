import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenerarServiceService } from './generar-service.service';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  
  constructor(
    private http: HttpClient,
    private servG: GenerarServiceService
  ) { }

  getDoctors(especialidad) {
    const URL = this.servG.API + "getDoctors";
    console.log(especialidad);

    return this.http.post<any>(URL, this.servG.objectToFormData({
      especialidad
    }));
  }
  getTicket() {
    let URL = this.servG.API + "getTurnos";
    return this.http.get<any>(URL);
  }

  registerCite(data) {
    const URL = this.servG.API + "newCite";
    const {
      idDoctor,
      date,
      ticket,
      id_user
    } = data;

    return this.http.post<any>(URL, this.servG.objectToFormData({
      date,
      id_user,
      idDoctor,
      ticket,
    }));       
  }

  
  getCites( idUsuario ){
    const URL = this.servG.API + "getCites";
    return this.http.post<any>(URL, this.servG.objectToFormData({
      idUsuario
    }));  
  }
  getCitesByPending(idUsuario){
    const URL = this.servG.API + "getCitesByPending";
    return this.http.post<any>(URL, this.servG.objectToFormData({
      idUsuario
    }));  
  }
  getCiteById( idCite ){
    const URL = this.servG.API + "getCitesById";
    return this.http.post<any>(URL, this.servG.objectToFormData({
      idCite
    }));  
  }
  getPendingCitesByDoctor( idDoctor ){
    const URL = this.servG.API + "getPendingCitesByDoctor";
    return this.http.post<any>(URL, this.servG.objectToFormData({
      idDoctor
    }));  
  }
  getCitesByDoctor( idDoctor ){
    const URL = this.servG.API + "getCitesByDoctor";
    return this.http.post<any>(URL, this.servG.objectToFormData({
      idDoctor
    }));  
  }
  updateCiteById(idCite,newInfo){
    const { fecha, idDisp } = newInfo;
    const URL = this.servG.API + "updateCiteById";
    return this.http.post<any>(URL, this.servG.objectToFormData({
      idCite,
      fecha,
      idDisp
    }));  
  }
  deleteCiteById(idCite){
    const URL = this.servG.API + "deleteCiteById";
    return this.http.post<any>(URL, this.servG.objectToFormData({
      idCite,            
    }));  
  }

  registerMedicament( idCite, descripcion ){
    const URL = this.servG.API + "registerMedicament";
    return this.http.post<any>(URL, this.servG.objectToFormData({
      idCite,
      descripcion
    }));  
  }

  uploadImgaes( idReceta,arrayImages ){
    const URL = this.servG.API + "uploadImgaes";
    return this.http.post<any>(URL, this.servG.objectToFormData({
      idReceta,
      arrayImages      
    }));  
  }

  getCitesWithStateAsist( idUsuario ){
    const URL = this.servG.API + "getCitesWithStateAsist";
    return this.http.post<any>(URL, this.servG.objectToFormData({
      idUsuario
    }));  
  }

  getCitesWithHistorial(idCite){
    const URL = this.servG.API + "getMedicamentoByIdCite";
    return this.http.post<any>(URL, this.servG.objectToFormData({
      idCite
    }));  
  }


  getHistorialByCite(idCite){
    const URL = this.servG.API + "getHistorialByCite";
    return this.http.post<any>(URL, this.servG.objectToFormData({
      idCite
    }));  
  }

  getImageByCite(idReceta){
    const URL = this.servG.API + "getImageByIdHistorial";
    return this.http.post<any>(URL, this.servG.objectToFormData({
      idReceta
    }));  

  }

}
