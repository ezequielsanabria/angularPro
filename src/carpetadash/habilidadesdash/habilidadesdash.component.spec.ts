import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesdashComponent } from './habilidadesdash.component';

describe('HabilidadesdashComponent', () => {
  let component: HabilidadesdashComponent;
  let fixture: ComponentFixture<HabilidadesdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
