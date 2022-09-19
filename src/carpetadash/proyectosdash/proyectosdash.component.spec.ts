import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosdashComponent } from './proyectosdash.component';

describe('ProyectosdashComponent', () => {
  let component: ProyectosdashComponent;
  let fixture: ComponentFixture<ProyectosdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
