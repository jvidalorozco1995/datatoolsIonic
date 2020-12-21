import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ConductoresService } from './../../services/ConductoresService';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.page.html',
  styleUrls: ['./conductores.page.scss'],
})
export class ConductoresPage implements OnInit {
  
  public conductoresForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder, private conductoresService: ConductoresService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController

  ) {
    this.conductoresForm = formBuilder.group({
      tipodocumento: ['', Validators.required],
      numerodocumento: ['', Validators.required],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      departamento: ['', Validators.required],
      pais: ['', Validators.required],
      nombres: ['', Validators.required],
      telefono: ['', Validators.required],
    
 
    });
    
  }

  ngOnInit() {
  }

  public async submit(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
    });
    await loading.present();
    this.conductoresService.createTask(this.conductoresForm.value)
    .subscribe(async (newTask) => {
     console.log(newTask)
     await loading.dismiss();
     this.presentToast(newTask.message)
      this.conductoresForm.reset();
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
