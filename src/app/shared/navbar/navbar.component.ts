import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/home/category/category.model';
import { CategoryService } from 'src/app/home/category/categoryService/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faHeart = faHeart;
  faCartShopping = faCartShopping;

  categoriasHombres: Category[] = [];
  categoriasMujeres: Category[] = [];
  categoriasKids: Category[] = [];

  constructor(
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.obtenerCategoriasHombre();
    this.obtenerCategoriasMujer();
    this.obtenerCategoriasKids();
  }

  private obtenerCategoriasHombre() {
    this.categoryService.obtenerCategoriasHombre().subscribe (
      (data) => {
        data.forEach( (category) => {
          const categoryNueva: Category = new Category(category.id, category.name, category.count, category.mainImg);
          this.categoriasHombres.push(categoryNueva);
        })
      }
    )
  }

  private obtenerCategoriasMujer() {
    this.categoryService.obtenerCategoriasMujer().subscribe (
      (data) => {
        data.forEach( (category) => {
          const categoryNueva: Category = new Category(category.id, category.name, category.count, category.mainImg);
          this.categoriasMujeres.push(categoryNueva);
        })
      }
    )
  }

  private obtenerCategoriasKids() {
    this.categoryService.obtenerCategoriasKids().subscribe (
      (data) => {
        data.forEach( (category) => {
          const categoryNueva: Category = new Category(category.id, category.name, category.count, category.mainImg);
          this.categoriasKids.push(categoryNueva);
        })
      }
    )
  }
}
