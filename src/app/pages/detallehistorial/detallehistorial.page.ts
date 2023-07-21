import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-detallehistorial',
  templateUrl: './detallehistorial.page.html',
  styleUrls: ['./detallehistorial.page.scss'],
})
export class DetallehistorialPage implements OnInit {

  idCite: number;
  medicamentos=[];
  imagenes=[];
  constructor(
    private modalController: ModalController,
    private servC: CitaService
  ) { }

  ngOnInit() {
    this.getHistorial();    
  }
  cancel() {
    return this.modalController.dismiss(null, 'cancel');
  }

  async getHistorial(){
    this.servC.getHistorialByCite(this.idCite).subscribe(resp=>{
      this.medicamentos = resp.Historial;
      console.log(this.medicamentos);    
      for (let i = 0; i < this.medicamentos.length; i++) {
        let id_receta = this.medicamentos[i].id_receta;         
        this.servC.getImageByCite(id_receta).subscribe(resp=>{
          this.imagenes.push(resp.Imagenes);
          console.log(this.imagenes);          
        })        
      }  
    })
  }

}
