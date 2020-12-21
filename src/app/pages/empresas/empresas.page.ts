import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EmpresasService } from './../../services/EmpresasService';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.page.html',
  styleUrls: ['./empresas.page.scss'],
})
export class EmpresasPage implements OnInit {

  public empresasForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private empresasService: EmpresasService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
    ) {
    this.empresasForm = formBuilder.group({
      tipodocumento: ['', Validators.required],
      numerodocumento: ['', Validators.required],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      tipodocumentoreplegal: ['', Validators.required],
      departamento: ['', Validators.required],
      numerodocumentoreplegal: ['', Validators.required],
      telefonoreplegal: ['', Validators.required],
      nombres: ['', Validators.required],
    });
    
   }

  ngOnInit() {
  
  }

  public async submit(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
    });
    await loading.present();
    this.empresasService.createTask(this.empresasForm.value)
    .subscribe(async (newTask) => {
     console.log(newTask)
     await loading.dismiss();
     this.presentToast(newTask.message)
      this.empresasForm.reset();
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000
    });
    await toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
      duration: 2000
    });
    await loading.present();
    return loading;
  }

}

