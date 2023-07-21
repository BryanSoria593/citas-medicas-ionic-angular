import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GenerarServiceService {

  
  API = "https://appmedicineproject.000webhostapp.com/";  

  cloudinaryURL = 'https://api.cloudinary.com/v1_1/xxbasmxx/upload';
  

  constructor(
    private toastController: ToastController,
    private route: Router,
    private alertController: AlertController,
    private loading: LoadingController

  ) { }

  objectToFormData(obj: any, form?: any, namespace?: any) {
    let fd: any = form || new FormData();
    let formKey: any;
    for (let property in obj) {
      if (obj.hasOwnProperty(property) && obj[property]) {
        if (namespace) {
          formKey = namespace + '[' + property + ']';
        } else {
          formKey = property;
        }
        if (obj[property] instanceof Date) {
          fd.append(formKey, obj[property].toISOString());
        }
        if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
          this.objectToFormData(obj[property], fd, formKey);
        } else {
          fd.append(formKey, obj[property]);

        }
      }
    }
    return fd;
  };
  
  async fun_Mensaje(textoMensaje: string, micolor: string = 'success') {
    const toast = await this.toastController.create({
      message: textoMensaje,
      color: micolor,
      duration: 3000

    });
    toast.present();
  }
  async alertas(message:string){
    const alert = await this.alertController.create({
      header:"Error",
      message,      
    });
    await alert.present();
  }

  irA(pagina: string) {
    
    this.route.navigate([pagina]);
 
  }

  async presentLoading(){
    const loading = await this.loading.create({      
      message: 'Por favor espere...',
    });

    return await loading.present();
  }

}
