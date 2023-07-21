import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/services/cita.service';
import { AlertController, IonItemSliding, LoadingController, ModalController } from '@ionic/angular';
import { GenerarServiceService } from 'src/app/services/generar-service.service';
import { UpdatePage } from '../update/update.page';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  cites = [];
  id=localStorage.getItem('id_usuario');
  constructor(
    private citaS: CitaService,
    private geneS: GenerarServiceService,
    private alertController: AlertController,
    private modalC: ModalController,
    private loadController: LoadingController
    ) { }

  ngOnInit(
    
  ) {
    this.getCites()
  }

  getCites(){
    this.citaS.getCitesByPending(this.id).subscribe(resp=>{      
      this.cites = resp.Citas;              
    })
  }

  async editar(idCite: any, ionItemSliding: IonItemSliding){

    const modal = await this.modalC.create({
      component: UpdatePage,
      componentProps:{
        idCite,
        
      },
      backdropDismiss: true
    });
    await modal.present();
    
  }

  async eliminar(idCite:any, ionItemSliding: IonItemSliding){
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: `¿Está seguro que desea eliminar la cita?`,
      buttons: [{
        text: 'Sí',
        handler: async () => {
          await this.geneS.presentLoading();
          this.citaS.deleteCiteById(idCite).subscribe(resp=>{
            this.geneS.fun_Mensaje(resp.mensaje,"danger");
            this.getCites();
            this.loadController.dismiss();
            
          })          
        }
      },
      {
        text: 'No',
        handler: () => {
          this.geneS.fun_Mensaje("Cancelado","danger");
        }
      }]
    }); 
    await alert.present();        
  }


}
