import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipperComponent } from './swiper.component';

describe('SwipperComponent', () => {
  let component: SwipperComponent;
  let fixture: ComponentFixture<SwipperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwipperComponent]
    });
    fixture = TestBed.createComponent(SwipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
