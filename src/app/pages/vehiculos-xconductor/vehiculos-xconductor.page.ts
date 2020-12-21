import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ConductorModel } from 'src/app/models/conductorModel';
import { EmpresaModel } from 'src/app/models/empresaModel';
import { VehiculosModel } from 'src/app/models/vehiculosModel';
import { AsignarVehiculosService } from 'src/app/services/AsignarVehiculosService';
import { ConductoresService } from 'src/app/services/ConductoresService';
import { EmpresasService } from 'src/app/services/EmpresasService';
import { VehiculosService } from 'src/app/services/VehiculosService';

@Component({
  selector: 'app-vehiculos-xconductor',
  templateUrl: './vehiculos-xconductor.page.html',
  styleUrls: ['./vehiculos-xconductor.page.scss'],
})
export class VehiculosXConductorPage implements OnInit {

  public vehiculosConductorForm: FormGroup;
  lstVehiculos: VehiculosModel[] = [];
  lstConductores: ConductorModel[] = [];
  constructor(
    public formBuilder: FormBuilder, 
    private vehiculosService: VehiculosService,
    private conductorService: ConductoresService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private asignarVehiculosService: AsignarVehiculosService,
    private loadingCtrl: LoadingController

  ) { 

    this.vehiculosConductorForm = formBuilder.group({
      idvehiculo: ['', Validators.required],
      idconductor: ['', Validators.required],
    });
    
  }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
    });
    await loading.present();
    this.vehiculosService.getAllTasks()
    .subscribe(async (tasks) => {
      console.log(tasks);
      this.lstVehiculos = tasks;
      
    });
    
    this.conductorService.getAll()
    .subscribe(async (tasks) => {
      console.log(tasks);
      this.lstConductores = tasks;
      await loading.dismiss();
    });
  }

  public async submit(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
    });
    await loading.present();
    this.asignarVehiculosService.createTask(this.vehiculosConductorForm.value)
    .subscribe(async (newTask) => {
     console.log(newTask)
     await loading.dismiss();
     this.presentToast(newTask.message)
      this.vehiculosConductorForm.reset();
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
