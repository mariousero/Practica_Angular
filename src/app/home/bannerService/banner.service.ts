import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBanner } from './banner.interface';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerBanners(): Observable<IBanner[]> {
    const urlEndPoint: string = "http://localhost:3002/banner";
    return this.http.get<IBanner[]>(urlEndPoint);
  }
}
