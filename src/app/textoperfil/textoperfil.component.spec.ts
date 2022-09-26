import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoperfilComponent } from './textoperfil.component';

describe('TextoperfilComponent', () => {
  let component: TextoperfilComponent;
  let fixture: ComponentFixture<TextoperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextoperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
