import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { EmpresaModel } from 'src/app/models/empresaModel';
import { EmpresasService } from 'src/app/services/EmpresasService';
import { VehiculosService } from 'src/app/services/VehiculosService';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {

  public vehiculosForm: FormGroup;
  lstEmpresas: EmpresaModel[] = [];

  constructor(
    public formBuilder: FormBuilder, 
    private vehiculosService: VehiculosService,
    private empresasService: EmpresasService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController

  ) { 

    this.vehiculosForm = formBuilder.group({
      placa: ['', Validators.required],
      motor: ['', Validators.required],
      chasis: ['', Validators.required],
      modelo: ['', Validators.required],
      fechamatricula: ['', Validators.required],
      pasajeros: ['', Validators.required],
      pesoseco: ['', Validators.required],
      pesobruto: ['', Validators.required],
      cantpuertas: ['', Validators.required],
      marca: ['', Validators.required],
      linea: ['', Validators.required],
      idempresa: ['', Validators.required],
    });
    

  }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
    });
    await loading.present();
    this.empresasService.getAll()
    .subscribe(async (tasks) => {
      console.log(tasks);
      this.lstEmpresas = tasks;
      await loading.dismiss();
    });
  }


  public async submit(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
    });
    await loading.present();
    this.vehiculosService.createTask(this.vehiculosForm.value)
    .subscribe(async (newTask) => {
     console.log(newTask)
     await loading.dismiss();
     this.presentToast(newTask.message)
      this.vehiculosForm.reset();
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
