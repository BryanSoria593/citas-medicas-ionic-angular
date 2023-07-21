import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/services/cita.service';
import { GenerarServiceService } from 'src/app/services/generar-service.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.page.html',
  styleUrls: ['./mostrar.page.scss'],
})
export class MostrarPage implements OnInit {

  cites = [];
  id=localStorage.getItem('id_usuario');

  constructor(
    private geneS: GenerarServiceService,
    private citaS: CitaService,
  ) { }

  ngOnInit() {
    this.getCites();
    
  }

  getCites(){
    this.citaS.getCites(this.id).subscribe(resp=>{      
      this.cites = resp.Citas;          
    })
  }
}
