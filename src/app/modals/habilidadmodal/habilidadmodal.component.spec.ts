import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadmodalComponent } from './habilidadmodal.component';

describe('HabilidadmodalComponent', () => {
  let component: HabilidadmodalComponent;
  let fixture: ComponentFixture<HabilidadmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
