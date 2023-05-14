import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProyectosModel } from '../model/proyectos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
    // URL = 'https://bakendjnla.onrender.com/proyectos/';
    URL = 'http://localhost:8080/proyectos/';

  constructor(private httpClient: HttpClient) { } 

  public lista(): Observable<ProyectosModel[]>{
    return this.httpClient.get<ProyectosModel[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<ProyectosModel>{
    return this.httpClient.get<ProyectosModel>(this.URL + "detail"  + "/"  + id);
  }

  public save(proyectos: ProyectosModel): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proyectos);
  }

  public update(id: number, proyectos: ProyectosModel): Observable<any>{
    return this.httpClient.put<any>(this.URL + "update"  + "/"  + id, proyectos);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + "delete"  + "/"  + id);
  }
}