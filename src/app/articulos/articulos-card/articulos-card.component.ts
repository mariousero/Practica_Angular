import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../articulo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { registerLocaleData } from '@angular/common';
import localeES  from '@angular/common/locales/es';

registerLocaleData(localeES);

@Component({
  selector: 'app-articulos-card',
  templateUrl: './articulos-card.component.html',
  styleUrls: ['./articulos-card.component.scss']
})
export class ArticulosCardComponent implements OnInit{
  @Input() articulo?: Articulo;
  faHeart = faHeartRegular;
  faHeartSolid = faHeartSolid;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
  }

  public calcularDescuento(precioAntiguo: number, precioNuevo?: number): number | undefined{
    if(precioNuevo){
      const porcentaje = (precioAntiguo - precioNuevo) / precioAntiguo * 100;
      return Math.round(porcentaje);
    }
    return undefined;
  }
}
