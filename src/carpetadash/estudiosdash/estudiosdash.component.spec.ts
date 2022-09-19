import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosdashComponent } from './estudiosdash.component';

describe('EstudiosdashComponent', () => {
  let component: EstudiosdashComponent;
  let fixture: ComponentFixture<EstudiosdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
