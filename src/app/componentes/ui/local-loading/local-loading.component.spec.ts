import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalLoadingComponent } from './local-loading.component';

describe('LocalLoadingComponent', () => {
  let component: LocalLoadingComponent;
  let fixture: ComponentFixture<LocalLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalLoadingComponent]
    });
    fixture = TestBed.createComponent(LocalLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
