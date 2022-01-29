import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalementRegionComponent } from './signalement-region.component';

describe('SignalementRegionComponent', () => {
  let component: SignalementRegionComponent;
  let fixture: ComponentFixture<SignalementRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalementRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalementRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
