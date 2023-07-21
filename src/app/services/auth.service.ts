import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenerarServiceService } from './generar-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private servG: GenerarServiceService
  ) { }

  
  loginUser( user ){
    const {email, password} = user;
    const API = this.servG.API+"acceso";
    return this.http.post<any>( API, this.servG.objectToFormData({
      email,
      password
    }) )
    
  }
  
  registerUser( user ){
    const API = this.servG.API+"newUsuario";
    const { 
      nombres,
      apellidos,
      cedula,
      fecha,
      ciudad,
      sexo,
      email,
      contrasena
    }  = user;  
    
    return this.http.post<any>( API, this.servG.objectToFormData({
      nombres,
      apellidos,
      cedula,
      fecha,
      ciudad,
      sexo,
      email,
      contrasena
    }))
  }
}
