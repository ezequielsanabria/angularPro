import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneditComponent } from './botonedit.component';

describe('BotoneditComponent', () => {
  let component: BotoneditComponent;
  let fixture: ComponentFixture<BotoneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
