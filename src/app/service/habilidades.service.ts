import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabilidadesModel } from '../model/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  // URL = 'https://bakendjnla.onrender.com/habilidades/';
  URL = 'http://localhost:8080/habilidades/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<HabilidadesModel[]>{
    return this.httpClient.get<HabilidadesModel[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<HabilidadesModel>{
    return this.httpClient.get<HabilidadesModel>(this.URL + "detail"  + "/"  + id);
  }

  public save(habilidades: HabilidadesModel): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', habilidades);
  }

  public update(id: number, habilidades: HabilidadesModel): Observable<any>{
    return this.httpClient.put<any>(this.URL + "update"  + "/"  + id, habilidades);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + "delete"  + "/"  + id);
  }
}