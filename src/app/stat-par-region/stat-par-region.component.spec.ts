import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatParRegionComponent } from './stat-par-region.component';

describe('StatParRegionComponent', () => {
  let component: StatParRegionComponent;
  let fixture: ComponentFixture<StatParRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatParRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatParRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
