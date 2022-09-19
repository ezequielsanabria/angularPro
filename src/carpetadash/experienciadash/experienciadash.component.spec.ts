import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciadashComponent } from './experienciadash.component';

describe('ExperienciadashComponent', () => {
  let component: ExperienciadashComponent;
  let fixture: ComponentFixture<ExperienciadashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciadashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciadashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
