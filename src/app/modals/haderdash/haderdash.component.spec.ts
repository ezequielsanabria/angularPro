import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaderdashComponent } from './haderdash.component';

describe('HaderdashComponent', () => {
  let component: HaderdashComponent;
  let fixture: ComponentFixture<HaderdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaderdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaderdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
