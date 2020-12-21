import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConductorModel } from '../models/conductorModel';
import { AsignarVehiculosModel } from '../models/asignarVehiculosModel';
import { VehiculosAsignados } from '../models/vehiculosasignados';

@Injectable({
  providedIn: 'root'
})
export class AsignarVehiculosService {

  private api = 'https://data-tools-rest.herokuapp.com/api';

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    const path = `${this.api}/vehiculosconductores`;
    return this.http.get<VehiculosAsignados[]>(path);
  }

  createTask(asignarModel: AsignarVehiculosModel) {
    const path = `${this.api}/asignarVehiculos`;
   return this.http.post<any>(path, asignarModel);
  }


}