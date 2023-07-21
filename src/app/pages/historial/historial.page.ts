import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CitaService } from 'src/app/services/cita.service';
import { DetallehistorialPage } from '../detallehistorial/detallehistorial.page';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  cites = [];
  id=localStorage.getItem('id_usuario');

  constructor(
    private citaS: CitaService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.getCites();
  }

  getCites(){
    this.citaS.getCitesWithStateAsist(this.id).subscribe(resp=>{      
      this.cites = resp.Citas;    
      console.log(this.cites);
            
    })
  }
  async viewHistorial(idCite){
    const modal = await this.modalController.create({
      component:  DetallehistorialPage,
      componentProps:{
        idCite,
      }
    });
    await modal.present();
  }
}
