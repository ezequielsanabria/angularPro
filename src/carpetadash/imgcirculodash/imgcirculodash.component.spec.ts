import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcirculodashComponent } from './imgcirculodash.component';

describe('ImgcirculodashComponent', () => {
  let component: ImgcirculodashComponent;
  let fixture: ComponentFixture<ImgcirculodashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgcirculodashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgcirculodashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
