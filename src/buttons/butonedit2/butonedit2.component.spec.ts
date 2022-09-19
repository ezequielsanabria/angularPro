import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Butonedit2Component } from './butonedit2.component';

describe('Butonedit2Component', () => {
  let component: Butonedit2Component;
  let fixture: ComponentFixture<Butonedit2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Butonedit2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Butonedit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
