import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from './articulo.model';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit{
  categoria?: string;
  articulos: Articulo[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articuloService: ArticlesService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoria = params['categoria'] ?? undefined;
    });
    this.obtenerArticulos();
  }

  private obtenerArticulos() {
    this.articuloService.obtenerArticulos().subscribe (
      (data) => {
        data.forEach( (articulo) =>{
          const articuloNuevo: Articulo = new Articulo(articulo.id, articulo.categoria, articulo.descripcion, articulo.precio, articulo.descuento, articulo.favorito, articulo.stock, articulo.color, articulo.tallas, articulo.img, articulo.precioDescuento);
          this.articulos.push(articuloNuevo);
        })
      }
    )
  }

}
