import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonhomeComponent } from './buttonhome.component';

describe('ButtonhomeComponent', () => {
  let component: ButtonhomeComponent;
  let fixture: ComponentFixture<ButtonhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
