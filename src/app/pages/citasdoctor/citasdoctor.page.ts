import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-citasdoctor',
  templateUrl: './citasdoctor.page.html',
  styleUrls: ['./citasdoctor.page.scss'],
})
export class CitasdoctorPage implements OnInit {

  cites = [];
  id=localStorage.getItem('id_usuario');

  constructor(
    private citaS: CitaService,
  ) {
    
   }

  ngOnInit() {
    this.getCites();
  }

  getCites(){
    this.citaS.getCitesByDoctor(this.id).subscribe(resp=>{      
      this.cites = resp.Citas;          
    })
  }

}
