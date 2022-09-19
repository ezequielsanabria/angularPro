import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremimodalComponent } from './sobremimodal.component';

describe('SobremimodalComponent', () => {
  let component: SobremimodalComponent;
  let fixture: ComponentFixture<SobremimodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremimodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremimodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
