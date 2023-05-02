import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IBanner } from './bannerService/banner.interface';
import { BannerService } from './bannerService/banner.service';
import { Banner } from './bannerService/banner.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  banners: Banner[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bannerService: BannerService
  ) {}

  ngOnInit(): void {
    this.obtenerBanners();
  }

  private obtenerBanners() {
    this.bannerService.obtenerBanners().subscribe (
      (data) => {
        data.forEach( (banner) => {
          const bannerNuevo: Banner = new Banner(banner.id, banner.img, banner.title, banner.subtitle);
          this.banners.push(bannerNuevo);
        })
      }
    )
  }

}
