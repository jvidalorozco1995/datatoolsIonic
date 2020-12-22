import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AsignarVehiculosModel } from 'src/app/models/asignarVehiculosModel';
import { VehiculosAsignados } from 'src/app/models/vehiculosasignados';
import { AsignarVehiculosService } from 'src/app/services/AsignarVehiculosService';

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.page.html',
  styleUrls: ['./listado-vehiculos.page.scss'],
})
export class ListadoVehiculosPage implements OnInit {

  lstVehiculosAsignados: VehiculosAsignados[] = [];
  filtroOpcionSeleccionada: any;
  search: string;

  constructor( private vehiculosAsignados: AsignarVehiculosService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
    ) { }

  async ngOnInit() {
    this.loadAll();
  }

  filter(){
    debugger;
    if(this.filtroOpcionSeleccionada == 0){
      this.lstVehiculosAsignados = this.lstVehiculosAsignados.filter(p=>p.tipodocumento.includes(this.search))
    }
    if(this.filtroOpcionSeleccionada == 1){
      this.lstVehiculosAsignados = this.lstVehiculosAsignados.filter(p=>p.numerodocumento.includes(this.search))
    }
    if(this.filtroOpcionSeleccionada == 2){
      this.lstVehiculosAsignados = this.lstVehiculosAsignados.filter(p=>p.empresa.includes(this.search))
    }
    if(this.filtroOpcionSeleccionada == 3){
      this.lstVehiculosAsignados = this.lstVehiculosAsignados.filter(p=>p.nombres.includes(this.search))
    }
    if(this.filtroOpcionSeleccionada == 4){
      this.lstVehiculosAsignados = this.lstVehiculosAsignados.filter(p=>p.placa.includes(this.search))
    }
  
  }

  check(){
    if(this.search == ''){
      this.loadAll();
    }
  }

  removefilter(){
    this.loadAll();
    this.search = '';
  }

  async desafiliar(itemSelected: any) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación',
      message: '¿Esta seguro que desea desafiliar el vehiculo? <strong>teniendo en cuenta que se borrará la información de la asignación y el vehiculo</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (t) => {
           
          }
        }, {
          text: 'Ok',
          handler: async () => {
            const loading = await this.loadingCtrl.create({
              message: 'Cargando..',
            });
            await loading.present();
            
            this.vehiculosAsignados.desafiliarVehiculos(itemSelected)
            .subscribe(async (newTask) => {
              this.presentToast(newTask.message)
               await loading.dismiss();
               this.loadAll();
            });
          }
        }
      ]
    });

    await alert.present();
  }
  async loadAll(){
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

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000
    });
    await toast.present();
  }

}
