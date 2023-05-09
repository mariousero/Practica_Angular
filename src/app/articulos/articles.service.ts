import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticulo } from './articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerArticulos(): Observable<IArticulo[]>{
    const urlEndPoint: string = "http://localhost:3002/articles";
    return this.http.get<IArticulo[]>(urlEndPoint);
  }
}
