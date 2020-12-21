import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { VehiculosAsignados } from 'src/app/models/vehiculosasignados';
import { AsignarVehiculosService } from 'src/app/services/AsignarVehiculosService';

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.page.html',
  styleUrls: ['./listado-vehiculos.page.scss'],
})
export class ListadoVehiculosPage implements OnInit {

  lstVehiculosAsignados: VehiculosAsignados[] = [];
  constructor( private vehiculosAsignados: AsignarVehiculosService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
    ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
    });
    await loading.present();
    this.vehiculosAsignados.getAll()
    .subscribe(async (tasks) => {
      console.log(tasks);
      this.lstVehiculosAsignados = tasks;
      await loading.dismiss();
    });
  }

}
