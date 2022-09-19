import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosmodalComponent } from './estudiosmodal.component';

describe('EstudiosmodalComponent', () => {
  let component: EstudiosmodalComponent;
  let fixture: ComponentFixture<EstudiosmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
