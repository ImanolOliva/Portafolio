import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EnvironmentProviders, Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroment';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private http:HttpClient){}


  postMessage(request:Usuarios){
    return this.http.post(environment.apiUrl,request);
  }

  
}
