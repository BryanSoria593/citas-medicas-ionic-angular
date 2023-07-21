import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenerarServiceService } from './generar-service.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient,
    private servG: GenerarServiceService
  ) { }

  fun_menu(perfil){
    let URL=this.servG.API+"menu";
    return this.http.post<any>(URL,this.servG.objectToFormData({
      perfil
   }));
   }

}
