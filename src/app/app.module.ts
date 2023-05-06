import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './home/banner/banner.component';
import { CardComponent } from './home/card/card.component';
import { CardCardComponent } from './home/card/card-card/card-card.component';
import { BannerCardComponent } from './home/banner/banner-card/banner-card.component';
import { CategoryComponent } from './home/category/category.component';
import { CategoryCardComponent } from './home/category/category-card/category-card.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    CardComponent,
    CardCardComponent,
    BannerCardComponent,
    CategoryComponent,
    CategoryCardComponent,
    NosotrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
