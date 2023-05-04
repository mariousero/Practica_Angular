import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICard } from './card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService{

  constructor(    
    private http: HttpClient
    ) { }

  public obtenerCards(): Observable<ICard[]> {
    const urlEndPoint: string = "http://localhost:3002/cards";
    return this.http.get<ICard[]>(urlEndPoint);
  }
}
