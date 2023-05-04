import { Component, OnInit } from '@angular/core';
import { Banner } from './banner.model';
import { BannerService } from './bannerService/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{
  banners: Banner[] = [];

  constructor(
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
