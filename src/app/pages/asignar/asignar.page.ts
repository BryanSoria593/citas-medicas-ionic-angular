import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CitaService } from 'src/app/services/cita.service';
import { GenerarServiceService } from 'src/app/services/generar-service.service';
import { AddhistorialPage } from '../addhistorial/addhistorial.page';

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.page.html',
  styleUrls: ['./asignar.page.scss'],
})
export class AsignarPage implements OnInit {

  cites = [];
  idDoctor=localStorage.getItem('id_usuario');

  

  constructor(
    private servG: GenerarServiceService,
    private citaS: CitaService,
    private modalC: ModalController
  ) { }

  ngOnInit() {
    this.getCites();
    
    
    
  }
  getCites(){
    this.citaS.getPendingCitesByDoctor(this.idDoctor).subscribe(resp=>{      
      this.cites = resp.Citas;          
      console.log(this.cites);
    })
  }
  async modalToHistorial( idCite){
    const modal = await this.modalC.create({
      component: AddhistorialPage,
      componentProps:{
        idCite,
        
      },
      backdropDismiss: true
    });
    await modal.present();
    
  }
}