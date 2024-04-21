import { Component, Input, TemplateRef } from '@angular/core'
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent<T> {
  @Input() slides: T[] = []
  @Input() slideTemplate!: TemplateRef<any>
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    arrows: false,
    dots: true,
    slidesPerRow: 2,
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
