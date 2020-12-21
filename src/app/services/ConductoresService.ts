import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConductorModel } from '../models/conductorModel';

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {

  private api = 'https://data-tools-rest.herokuapp.com/api';

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    const path = `${this.api}/conductores`;
    return this.http.get<ConductorModel[]>(path);
  }


  createTask(conductor: ConductorModel) {
    const path = `${this.api}/conductores`;
    debugger;
    return this.http.post<any>(path, conductor);
  }


}