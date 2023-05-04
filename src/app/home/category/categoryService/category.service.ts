import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerCategoriasMujer(): Observable<ICategory[]>{
    const urlEndPoint: string = "http://localhost:3002/womenClothes";
    return this.http.get<ICategory[]>(urlEndPoint);
  }

  public obtenerCategoriasHombre(): Observable<ICategory[]>{
    const urlEndPoint: string = "http://localhost:3002/menClothes";
    return this.http.get<ICategory[]>(urlEndPoint);
  }

  public obtenerCategoriasKids(): Observable<ICategory[]>{
    const urlEndPoint: string = "http://localhost:3002/kidClothes";
    return this.http.get<ICategory[]>(urlEndPoint);
  }
}
