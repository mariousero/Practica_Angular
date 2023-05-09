import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloFormComponent } from './articulos/articulo-form/articulo-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'articulos/:categoria', component: ArticulosComponent},
  { path: 'articulo-ficha/:idArticulo', component: ArticuloFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
