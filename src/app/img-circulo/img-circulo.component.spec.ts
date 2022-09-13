import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCirculoComponent } from './img-circulo.component';

describe('ImgCirculoComponent', () => {
  let component: ImgCirculoComponent;
  let fixture: ComponentFixture<ImgCirculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgCirculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgCirculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
