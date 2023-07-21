import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GenerarServiceService } from '../../services/generar-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  info={
    nombres:"",
    apellidos:"",
    cedula:"",
    fecha:"",
    ciudad:"",
    sexo:"",
    email:"",
    contrasena:""
  }  
  constructor(
    private authService: AuthService,
    private servG: GenerarServiceService
  ) { }

  ngOnInit() {
  }
  registerUser(){
    this.authService.registerUser(this.info).subscribe((resp)=>{   
      if(resp.id != 0){
        this.servG.fun_Mensaje(resp.mensaje);    
        setTimeout( ()=>{
          this.servG.irA("login");
          
        }, 3000 )
      }else{
        this.servG.fun_Mensaje(resp.mensaje);    
      }

    })
    
    
    
  }


}
