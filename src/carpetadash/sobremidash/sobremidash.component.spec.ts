import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremidashComponent } from './sobremidash.component';

describe('SobremidashComponent', () => {
  let component: SobremidashComponent;
  let fixture: ComponentFixture<SobremidashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremidashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremidashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
