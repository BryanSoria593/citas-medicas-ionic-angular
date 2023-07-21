import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { GenerarServiceService } from 'src/app/services/generar-service.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  listaopcionesMenu: any[];

  constructor(
    private serv: MenuService,
    private servG: GenerarServiceService,
    private loadController: LoadingController
  ) { }

  ngOnInit() {
    this.menu()
  }
  menu() {
    const perfil = localStorage.getItem('user_rol');    
    this.serv.fun_menu(perfil).subscribe(resp => {
      this.listaopcionesMenu = resp.data;
    });

  }
  irA(direccion){    
    this.servG.irA(direccion);    
  }

}
