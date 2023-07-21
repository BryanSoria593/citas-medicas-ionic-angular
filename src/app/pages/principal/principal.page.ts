import { Component, OnInit } from '@angular/core';
import { GenerarServiceService } from 'src/app/services/generar-service.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  sliderConfig={
    spaceBerween:5,
    centerSlides:true,
    slidesPerView:2.5
  }

  vectorArticulos:{
    titulo1:string,    
    foto:string,        
  }[]=[{
    titulo1:"Síntomas del covid-19",    
    foto:"https://www.atulado.com.ec/content/dam/a-tu-lado/es_EC/images/covid-19/Covid%20Diagramado-19.png",
  },
  {
    titulo1:"Primers auxilios",    
    foto:"https://img2.rtve.es/im/5503087/?w=900",
  },
  {
    titulo1:"Síntomas de la viruela del mono",    
    foto:"https://img.freepik.com/vector-gratis/hombre-viruela-simio-sintomas_1308-110470.jpg?w=740&t=st=1661323219~exp=1661323819~hmac=2cbcade3d6d93e10d29b0bb89515843ff98b029256a07a9504a3a140f2b8f97a",
  },
  {
    titulo1:"Síntomas de la viruela del mono",    
    foto:"https://img.freepik.com/vector-gratis/hombre-viruela-simio-sintomas_1308-110470.jpg?w=740&t=st=1661323219~exp=1661323819~hmac=2cbcade3d6d93e10d29b0bb89515843ff98b029256a07a9504a3a140f2b8f97a",
  },
  {
    titulo1:"Síntomas de la viruela del mono",    
    foto:"https://img.freepik.com/vector-gratis/hombre-viruela-simio-sintomas_1308-110470.jpg?w=740&t=st=1661323219~exp=1661323819~hmac=2cbcade3d6d93e10d29b0bb89515843ff98b029256a07a9504a3a140f2b8f97a",
  },
  {
    titulo1:"Síntomas de la viruela del mono",    
    foto:"https://img.freepik.com/vector-gratis/hombre-viruela-simio-sintomas_1308-110470.jpg?w=740&t=st=1661323219~exp=1661323819~hmac=2cbcade3d6d93e10d29b0bb89515843ff98b029256a07a9504a3a140f2b8f97a",
  },
  {
    titulo1:"Síntomas de la viruela del mono",    
    foto:"https://img.freepik.com/vector-gratis/hombre-viruela-simio-sintomas_1308-110470.jpg?w=740&t=st=1661323219~exp=1661323819~hmac=2cbcade3d6d93e10d29b0bb89515843ff98b029256a07a9504a3a140f2b8f97a",
  },
  {
    titulo1:"Síntomas de la viruela del mono",    
    foto:"https://img.freepik.com/vector-gratis/hombre-viruela-simio-sintomas_1308-110470.jpg?w=740&t=st=1661323219~exp=1661323819~hmac=2cbcade3d6d93e10d29b0bb89515843ff98b029256a07a9504a3a140f2b8f97a",
  },

  
]

  usr_id:number;
  nombre_usr:string;
  apellidos:string;
  per_id:number;
  perfil:string;
  imagen:string;

  constructor(
    private servG: GenerarServiceService
  ) { }

  ngOnInit() {
    this.usr_id=parseInt(localStorage.getItem('id_usuario'));
    this.nombre_usr=localStorage.getItem('nombres');
    this.apellidos=localStorage.getItem('apellidos');
    this.imagen=localStorage.getItem('imagen');
    this.per_id=parseInt(localStorage.getItem('user_rol'));

  }
  fun_salir(){
    
    
    localStorage.removeItem('apellidos')
    localStorage.removeItem('id_usuario')
    localStorage.removeItem('nombres')
    localStorage.removeItem('user_rol')
    localStorage.removeItem('imagen')   
    this.servG.fun_Mensaje(" Cerrando la aplicación..");
    this.servG.irA('login');
    
  }

}
