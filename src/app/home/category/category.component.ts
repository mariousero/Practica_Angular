import { Component, OnInit } from '@angular/core';
import { CategoryService } from './categoryService/category.service';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  categoriasHombres: Category[] = [];
  categoriasMujeres: Category[] = [];
  categoriasKids: Category[] = [];
  selectedCategory: Category[] = this.categoriasHombres;

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
