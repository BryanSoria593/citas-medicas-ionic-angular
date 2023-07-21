import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { CitaService } from 'src/app/services/cita.service';
import { GenerarServiceService } from 'src/app/services/generar-service.service';

@Component({
  selector: 'app-addhistorial',
  templateUrl: './addhistorial.page.html',
  styleUrls: ['./addhistorial.page.scss'],
})
export class AddhistorialPage implements OnInit {

  idCite: number;
  idReceta: "";
  images = "";
  urlsImages = [];
  selectedFiles?: FileList;
  previews: string[] = [];
  desripcion: ""

  constructor(
    private modalController: ModalController,
    private servG: GenerarServiceService,
    private servC: CitaService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }
  cancel() {
    return this.modalController.dismiss(null, 'cancel');
  }

  onFileInputChange({ target }) {
    // Agregar las imágenes en un array
    this.images = target.files;

    this.selectedFiles = target.files;
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          // Agregar imágenes para mostrarlas previamente antes de subirlas
          this.previews.push(e.target.result);
        };
        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  async uploadImageToCloudinary(file) {
    const APICloud = this.servG.cloudinaryURL;

    const formData = new FormData();

    formData.append('upload_preset', 'app-citamedica');
    formData.append('file', file);

    try {
      const resp = await fetch(APICloud, {
        method: 'POST',
        body: formData
      });
      if (!resp.ok) throw new Error('No se pudo subir la imágen');
      const cloudResp = await resp.json();
      // Se almacenarán las URL que devuelve cloudinaro en un array
      this.urlsImages.push(cloudResp.secure_url);
    } catch (error) {
      console.log(error);
    }
  }
  async uploadImages() {
    if (this.images === "") {
      this.cancel();
      this.servG.fun_Mensaje('Se agregaron medicamentos sin imágenes', 'success')
      return false;

    } else {
      this.servG.presentLoading();
      this.urlsImages = [];
      const fileUploadPromises = [];
      for (const file of this.images) {
        // Se subirá un array de imágenes hacia cloudinari 
        fileUploadPromises.push(await this.uploadImageToCloudinary(file))
      }
      this.urlsImages.forEach(element => {
        // Se subirá los enlaces a la base de datos conforme la cantidad del array de this.urlsImages
        this.servC.uploadImgaes(this.idReceta, element).subscribe(resp => {
          this.loadingController.dismiss();
        })
      });
      this.cancel();
      this.servG.fun_Mensaje('Se agregaron medicamentos con imágenes', 'success')
    }
  }

  registerMedicament() {    
    this.servC.registerMedicament(this.idCite, this.desripcion).subscribe(resp => {
      this.idReceta = resp.id_receta;      
    })
  }

  async registerData() {
    this.registerMedicament();
    this.uploadImages();
  }
}
