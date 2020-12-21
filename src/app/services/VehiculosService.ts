import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpresaModel } from '../models/empresaModel';
import { VehiculosModel } from '../models/vehiculosModel';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private api = 'https://data-tools-rest.herokuapp.com/api';

  constructor(
    private http: HttpClient
  ) { }

  getAllTasks() {
    const path = `${this.api}/vehiculos`;
    return this.http.get<VehiculosModel[]>(path);
  }


  createTask(task: VehiculosModel) {
    const path = `${this.api}/vehiculos`;
    return this.http.post<any>(path, task);
  }


}