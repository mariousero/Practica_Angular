import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../articulo.model';
import { registerLocaleData } from '@angular/common';
import localeES  from '@angular/common/locales/es';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faRuler } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';

registerLocaleData(localeES);

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.scss']
})
export class ArticuloFormComponent implements OnInit{
  idArticulo?: string;
  articulos: Articulo[] = [];
  articulo?: Articulo;
  faStar = faStar
  faRuler = faRuler
  faEnvelope = faEnvelope
  faHeart = faHeart
  faTwitter = faTwitter
  faFacebook = faFacebook
  faPinterest = faPinterest

  constructor(
    private articleService: ArticlesService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.idArticulo = this.route.snapshot.paramMap.get('idArticulo') ?? undefined;
    this.obtenerArticulos();
  }

  private obtenerArticulos() {
    this.articleService.obtenerArticulos().subscribe (
      (data) => {
        data.forEach( (articulo) =>{
          const articuloNuevo: Articulo = new Articulo(articulo.id, articulo.categoria, articulo.descripcion, articulo.precio, articulo.descuento, articulo.favorito, articulo.stock, articulo.color, articulo.tallas, articulo.img, articulo.precioDescuento);
          this.articulos.push(articuloNuevo);
        })
        this.articulo = this.articuloById(this.idArticulo);
      }
    )
  }

  private articuloById(id?: string): Articulo | undefined {
    if(id){
      const numId = parseInt(id, 10);
      for(let i = 0 ; i < this.articulos.length ; i++){
        if(this.articulos[i].getId() === numId){
          return this.articulos[i];
        }
      }
    } 
    return undefined;
  }

  public calcularDescuento(precioAntiguo: number, precioNuevo?: number): number | undefined{
    if(precioNuevo){
      const porcentaje = (precioAntiguo - precioNuevo) / precioAntiguo * 100;
      return Math.round(porcentaje);
    }
    return undefined;
  }

  public stringToInt(talla: string): number{
    let num = Number(talla);
    return num;
  }

}
