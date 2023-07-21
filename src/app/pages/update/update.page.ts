import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { CitaService } from 'src/app/services/cita.service';
import { GenerarServiceService } from 'src/app/services/generar-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  
  isModalOpen = false;
  idCite: number;
  infoTicket:[]=null;
  newInfo={
    fecha: '',
    idDisp: ''
  }

  constructor(
    private servC: CitaService,
    private serG: GenerarServiceService,
    private alertController: AlertController,
    private modalController: ModalController,
    private loadController: LoadingController
  ) { }

  ngOnInit() {    
    this.getDate()
  }
  async alerta(){        
    const alert = await this.alertController.create({
      header:"Información",
      message: "Solo se puede actualizar la fecha y hora de la cita",
      buttons:[
        {
          text: 'Ok',
          handler: ()=>{
            return;
          }
        }
      ]
    })
    await alert.present();
  }
  getDate() {    
    this.servC.getTicket().subscribe(resp=>{      
      this.infoTicket= resp.Tickets;      
    })  
  }
  selectTicket(id_turno){
    this.newInfo.idDisp = id_turno;    
  }
  cancel() {
    return this.modalController.dismiss(null, 'cancel');
  }

  async actualizar(){
    const alert = await this.alertController.create({
      header:"Confirmación",
      message: "¿Desea actualizar la cita?",

      buttons:[
        {
          text: 'Aceptar',
          handler: async()=>{
            await this.serG.presentLoading()
            this.servC.updateCiteById(this.idCite, this.newInfo).subscribe(resp=>{
              this.serG.fun_Mensaje(resp.mensaje, 'success');
              this.cancel();
              this.loadController.dismiss();
            })  
          }
          
           
        },
        {
          text: 'Cancelar',
          handler: ()=>{
            return;
          }
        }

      ]
    })
    await alert.present()
  }

}
