import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { CitaService } from 'src/app/services/cita.service';
import { GenerarServiceService } from 'src/app/services/generar-service.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  espSelect: string = "";
  infoDoctor: [] = null;
  infoTicket:[] = null;
  idDoctor: "";
  dataCite = {
    especialidad: "",
    idDoctor: "",
    date: "",
    ticket: "",
    id_user: localStorage.getItem("id_usuario")
  }

  constructor(
    private http: HttpClient,
    private servG: GenerarServiceService,
    private citaS: CitaService,
    private alertC: AlertController,
    private loaderController: LoadingController

  ) { }

  ngOnInit() {
  }

  especialidad(event) {
    this.dataCite.idDoctor = "";
    this.dataCite.date = "";
    this.dataCite.ticket = "";
    this.infoTicket = null;  
    this.dataCite.especialidad = event;
    this.getDoctor()
  }

  getDoctor() {
    
    this.citaS.getDoctors(this.dataCite.especialidad).subscribe(resp => {
      if (resp.cantidad > 0) {
        this.infoDoctor = resp.Productos;
        
      } else {
        this.servG.alertas("No existen doctores para esta área");
        this.infoDoctor = null;
        
      }
    })
    
  }
  selecDoctor(id) {
    this.dataCite.idDoctor = id;
  }
  getDate({ detail }) {
    
    this.dataCite.date = detail.value;
    this.citaS.getTicket().subscribe(resp=>{      
      this.infoTicket = resp.Tickets;         
      
    })  
  }
  selectTicket(ticket){   
    this.dataCite.ticket=ticket;
    
  }
  async registrar(){
    
    const alert = await this.alertC.create({
      header: "Confirmación",
      message: "¿Desea registrar la cita?",
      buttons:[
        {
          text:'Sí',
          handler:()=>{
            this.citaS.registerCite(this.dataCite).subscribe(resp=>{
              this.servG.fun_Mensaje('Cita agendada','success');
              this.servG.irA('mostrar');
              
            })            
          }
        },
        {
          text:'No',
          handler:()=>{
            
            this.servG.fun_Mensaje('Cita cancelada','danger')}
        }
      ]
    });
    await alert.present()
  }
}
