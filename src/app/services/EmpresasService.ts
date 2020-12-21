import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpresaModel } from '../models/empresaModel';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  private api = 'https://data-tools-rest.herokuapp.com/api';

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    const path = `${this.api}/empresas/`;
    return this.http.get<EmpresaModel[]>(path);
  }


  createTask(task: EmpresaModel) {
    const path = `${this.api}/empresas`;
    debugger;
    return this.http.post<any>(path, task);
  }


}