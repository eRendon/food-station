import { Component, Input } from '@angular/core'
import { IProduct } from '../../../interfaces/IProduct'
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent {
  @Input() slides: IProduct[] = []
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    arrows: false,
    dots: true,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 3,
          dots: false,
          rows: 1,
          slidesPerRow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 13,
          dots: false,
          rows: 1,
          slidesPerRow: 1,
        }
      }
    ]
  }

  slickInit(e: any) {
    console.log(this.slides.length);
  }
}
