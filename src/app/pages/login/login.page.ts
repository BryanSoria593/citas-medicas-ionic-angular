import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { GenerarServiceService } from 'src/app/services/generar-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  dataUser = {
    email: "",
    password: ""
  }
  constructor(
    private auth: AuthService,
    private servG: GenerarServiceService,
    private loaderController: LoadingController
  ) { }

  ngOnInit() {
    localStorage.removeItem('apellidos')
    localStorage.removeItem('id_usuario')
    localStorage.removeItem('nombres')
    localStorage.removeItem('user_rol')
    localStorage.removeItem('imagen')
    
  }

  async login() {
    await this.servG.presentLoading();
    this.auth.loginUser(this.dataUser).subscribe(resp => {
      if (resp.cantidad > 0) {
        const {
          id_usuario,
          apellidos,
          nombres,
          user_rol,
          imagen
        } = resp.data[0];

        localStorage.setItem("id_usuario", id_usuario);
        localStorage.setItem("apellidos", apellidos);
        localStorage.setItem("nombres", nombres);
        localStorage.setItem("user_rol", user_rol);
        localStorage.setItem("imagen", imagen);
        
        this.limpiarCampos()

        this.servG.irA("principal");
      } else {
        this.limpiarCampos()
      }
      this.servG.fun_Mensaje(resp.mensaje);
      this.loaderController.dismiss();

    })

  }
  fun_limpiar() {
    localStorage.removeItem('imagen');
    localStorage.removeItem('id_usuario');
    localStorage.removeItem('apellidos');
    localStorage.removeItem('nombres');
    localStorage.removeItem('user_rol');
  }
  limpiarCampos() {
    this.dataUser.email = '';
    this.dataUser.password = '';
    this.loaderController.dismiss();
  }

}
